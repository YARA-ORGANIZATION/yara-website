"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/redux/app/hooks";
import { updateResearchProjectAsync, deleteResearchProjectAsync } from "@/redux/features/research_projects/actions";
import type { ResearchProjectSchema } from "@/backend/models/research_projects";
import type { ThemeKey } from "@/lib/research";

const themeOptions: { label: string; value: ThemeKey }[] = [
  { label: "Artificial Intelligence", value: "ai" },
  { label: "Climate", value: "climate" },
  { label: "Public Health", value: "health" },
];

interface Props {
  data: ResearchProjectSchema;
  onSuccess: () => void;
}

export default function UpdateResearchProjectForm({ data, onSuccess }: Props) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    question: data.question,
    researcher: data.researcher,
    themes: [...data.themes],
    tags: data.tags,
    summary: data.summary,
    sortOrder: data.sortOrder,
    publishedAt: (data.publishedAt ?? data.createdAt).toISOString().slice(0, 16),
    themeSummary: { ...data.themeSummary },
  });

  function updateField(field: string, value: string | number) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleTheme(theme: ThemeKey) {
    setForm((prev) => {
      const themes = prev.themes.includes(theme)
        ? prev.themes.filter((t) => t !== theme)
        : [...prev.themes, theme];
      const themeSummary = { ...prev.themeSummary };
      if (!themes.includes(theme)) delete themeSummary[theme];
      return { ...prev, themes, themeSummary };
    });
  }

  function updateThemeSummary(theme: ThemeKey, value: string) {
    setForm((prev) => ({
      ...prev,
      themeSummary: { ...prev.themeSummary, [theme]: value },
    }));
  }

  async function handleUpdate() {
    if (!form.question || !form.researcher || form.themes.length === 0) {
      toast.error("Please fill in question, researcher and at least one theme.");
      return;
    }
    setLoading(true);
    try {
      await dispatch(
        updateResearchProjectAsync({
          id: data.id,
          data: {
            question: form.question,
            questionSearch: form.question.toLowerCase(),
            researcher: form.researcher,
            themes: form.themes,
            tags: form.tags,
            summary: form.summary,
            themeSummary: form.themeSummary,
            sortOrder: form.sortOrder,
            publishedAt: new Date(form.publishedAt),
          },
        }),
      ).unwrap();
      toast.success("Research project updated!");
      onSuccess();
    } catch (err) {
      toast.error("Failed to update research project.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this research project?")) return;
    setLoading(true);
    try {
      await dispatch(deleteResearchProjectAsync(data)).unwrap();
      toast.success("Research project deleted.");
      onSuccess();
    } catch (err) {
      toast.error("Failed to delete research project.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const inputCls =
    "w-full rounded-lg border border-transparent bg-white p-3 text-base font-medium text-black outline-none placeholder:text-neutral-400 active:border-neutral-300 focus:border-neutral-300 md:text-sm lg:text-sm";

  return (
    <div data-lenis-prevent className="h-full overflow-y-auto space-y-5">
      <div>
        <label className="text-sm font-medium text-black">Question *</label>
        <textarea value={form.question} onChange={(e) => updateField("question", e.target.value)} rows={2} className={inputCls} />
      </div>
      <div>
        <label className="text-sm font-medium text-black">Researcher *</label>
        <input type="text" value={form.researcher} onChange={(e) => updateField("researcher", e.target.value)} className={inputCls} />
      </div>
      <div>
        <label className="text-sm font-medium text-black">Themes *</label>
        <div className="flex gap-2">
          {themeOptions.map((t) => (
            <button
              key={t.value}
              type="button"
              onClick={() => toggleTheme(t.value)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                form.themes.includes(t.value) ? "bg-forest text-lime" : "bg-cream text-ink ring-1 ring-line hover:ring-forest"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="text-sm font-medium text-black">Tags</label>
        <input type="text" value={form.tags} onChange={(e) => updateField("tags", e.target.value)} className={inputCls} />
      </div>
      <div>
        <label className="text-sm font-medium text-black">Summary</label>
        <textarea value={form.summary} onChange={(e) => updateField("summary", e.target.value)} rows={4} className={inputCls} />
      </div>
      {form.themes.map((theme) => (
        <div key={theme}>
          <label className="text-sm font-medium text-black">
            Theme summary ({themeOptions.find((t) => t.value === theme)?.label})
          </label>
          <textarea
            value={form.themeSummary[theme] ?? ""}
            onChange={(e) => updateThemeSummary(theme, e.target.value)}
            rows={2}
            className={inputCls}
          />
        </div>
      ))}
      <div>
        <label className="text-sm font-medium text-black">Sort order</label>
        <input
          type="number"
          value={form.sortOrder}
          onChange={(e) => updateField("sortOrder", parseInt(e.target.value) || 0)}
          className={inputCls}
        />
      </div>
      <div>
        <label className="text-sm font-medium text-black">Published at</label>
        <input
          type="datetime-local"
          value={form.publishedAt}
          onChange={(e) => updateField("publishedAt", e.target.value)}
          className={inputCls}
        />
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleDelete}
          disabled={loading}
          className="flex h-[40px] items-center justify-center rounded-lg bg-red-700 px-8 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-[99%] disabled:cursor-not-allowed disabled:opacity-30"
        >
          Delete
        </button>
        <button
          type="button"
          onClick={handleUpdate}
          disabled={loading}
          className="flex h-[40px] items-center justify-center rounded-lg bg-black px-8 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-[99%] disabled:cursor-not-allowed disabled:opacity-30"
        >
          {loading ? "Saving..." : "Update Project"}
        </button>
      </div>
    </div>
  );
}
