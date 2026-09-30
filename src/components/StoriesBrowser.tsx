"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight, Search } from "lucide-react";
import type { ThemeKey } from "@/lib/research";
import { categoryLabels, type StoryItem } from "@/lib/stories";
import type { StoryCategory } from "@/backend/models/stories";
import { cx } from "./ui";

const PAGE_SIZE = 15;

const themeLabels: Record<ThemeKey, string> = {
  ai: "Artificial Intelligence",
  climate: "Climate",
  health: "Public Health",
};

/** Locked copy shown when a category has nothing published yet. */
const emptyCopy: Partial<Record<StoryCategory, string>> = {
  insight: "Plain-language explanations of YARA research and ideas will appear here as they are published.",
  press: "External journalism, interviews and coverage about YARA and its work will appear here.",
};

const selectCls =
  "h-11 appearance-none rounded-full bg-white pr-9 pl-4 text-sm text-ink ring-1 ring-line outline-none focus:ring-2 focus:ring-forest";

function Select({ label, children, ...props }: { label: string } & React.ComponentProps<"select">) {
  return (
    <label className="relative inline-flex">
      <span className="sr-only">{label}</span>
      <select {...props} className={selectCls}>
        {children}
      </select>
      <ChevronDown aria-hidden className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted" />
    </label>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function StoriesBrowser({ stories }: { stories: StoryItem[] }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState<StoryCategory | "">("");
  const [theme, setTheme] = useState<ThemeKey | "">("");
  const [sort, setSort] = useState<"new" | "old">("new");
  const [page, setPage] = useState(1);

  // Allow deep links such as /stories?type=insight#browse
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("type");
    if (t === "spotlight" || t === "insight" || t === "press") setType(t);
  }, []);

  useEffect(() => setPage(1), [query, type, theme, sort]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = stories.filter(
      (s) =>
        (!type || s.category === type) &&
        (!theme || s.themes.includes(theme)) &&
        (!q || `${s.title} ${s.excerpt} ${s.byline ?? ""}`.toLowerCase().includes(q)),
    );
    return sort === "new" ? list : [...list].reverse();
  }, [stories, query, type, theme, sort]);

  const pages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const shown = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const hasFilters = !!(query || type || theme || sort !== "new");

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-line pb-6 lg:flex-row lg:items-center lg:justify-between">
        <p className="text-sm text-muted" aria-live="polite">
          Showing {shown.length} of {filtered.length}
          {filtered.length !== stories.length && <> (filtered from {stories.length})</>}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <label className="relative">
            <span className="sr-only">Search stories</span>
            <Search aria-hidden className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="h-11 w-48 rounded-full bg-white pr-4 pl-10 text-sm ring-1 ring-line outline-none focus:ring-2 focus:ring-forest"
            />
          </label>
          <Select label="Filter by type" value={type} onChange={(e) => setType(e.target.value as StoryCategory | "")}>
              <option value="">Filter by type</option>
              {(Object.keys(categoryLabels) as StoryCategory[]).map((c) => (
                <option key={c} value={c}>
                  {categoryLabels[c]}
                </option>
              ))}
          </Select>
          <Select label="Filter by research area" value={theme} onChange={(e) => setTheme(e.target.value as ThemeKey | "")}>
              <option value="">Filter by area</option>
              {(Object.keys(themeLabels) as ThemeKey[]).map((t) => (
                <option key={t} value={t}>
                  {themeLabels[t]}
                </option>
              ))}
          </Select>
          <Select label="Sort" value={sort} onChange={(e) => setSort(e.target.value as "new" | "old")}>
              <option value="new">Newest first</option>
              <option value="old">Oldest first</option>
          </Select>
          {hasFilters && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setType("");
                setTheme("");
                setSort("new");
              }}
              className="h-11 rounded-full px-4 text-sm font-medium text-forest underline underline-offset-4 hover:text-forest-deep"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {shown.length === 0 ? (
        <p className="py-12 text-lg text-ink/75">
          {(type && emptyCopy[type]) || "No stories match these filters yet."}
        </p>
      ) : (
        <ul>
          <li
            aria-hidden
            className="hidden grid-cols-[1fr_11rem_9rem_12rem] gap-6 border-b border-line py-3 text-xs font-semibold tracking-[0.12em] text-muted uppercase md:grid"
          >
            <span>Title</span>
            <span>Date</span>
            <span>Type</span>
            <span>Area</span>
          </li>
          {shown.map((s) => {
            const content = (
              <>
                <span className="text-lg leading-snug font-medium tracking-tight text-ink group-hover:text-forest md:text-xl">
                  {s.title}
                  {s.external && (
                    <>
                      <ArrowUpRight aria-hidden className="ml-1 inline size-4 align-baseline text-muted" />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </>
                  )}
                </span>
                <span className="text-sm text-muted">
                  <time dateTime={s.publishedAt}>{formatDate(s.publishedAt)}</time>
                </span>
                <span className="text-sm text-ink/80">{categoryLabels[s.category]}</span>
                <span className="text-sm text-ink/70">{s.themes.map((t) => themeLabels[t]).join(", ")}</span>
              </>
            );
            const cls =
              "group grid gap-1 border-b border-line py-5 transition-colors hover:bg-white/60 md:grid-cols-[1fr_11rem_9rem_12rem] md:items-baseline md:gap-6";
            return (
              <li key={s.id}>
                {s.external ? (
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {content}
                  </a>
                ) : (
                  <Link href={s.href} className={cls}>
                    {content}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      )}

      {pages > 1 && (
        <nav aria-label="Stories pages" className="mt-8 flex items-center justify-between">
          <ul className="flex gap-1">
            {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
              <li key={n}>
                <button
                  type="button"
                  onClick={() => setPage(n)}
                  aria-current={n === page ? "page" : undefined}
                  className={cx(
                    "size-9 rounded-full text-sm font-medium",
                    n === page ? "bg-forest text-lime" : "text-ink hover:bg-white",
                  )}
                >
                  {n}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="inline-flex h-9 items-center gap-1 rounded-full px-3 text-sm font-medium ring-1 ring-line disabled:opacity-40"
            >
              <ChevronLeft aria-hidden className="size-4" /> Previous
            </button>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(pages, p + 1))}
              disabled={page === pages}
              className="inline-flex h-9 items-center gap-1 rounded-full px-3 text-sm font-medium ring-1 ring-line disabled:opacity-40"
            >
              Next <ChevronRight aria-hidden className="size-4" />
            </button>
          </div>
        </nav>
      )}
    </div>
  );
}
