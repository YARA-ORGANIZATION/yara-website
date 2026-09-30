"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/redux/app/hooks";
import { createResearchProjectAsync } from "@/redux/features/research_projects/actions";
import RichTextEditor from "../../RichTextEditor";
import type { ThemeKey } from "@/lib/research";

const themeOptions: { label: string; value: ThemeKey }[] = [
  { label: "Artificial Intelligence", value: "ai" },
  { label: "Climate", value: "climate" },
  { label: "Public Health", value: "health" },
];

function toLocalDateTimeValue(date: Date): string {
  const localDate = new Date(
    date.getTime() - date.getTimezoneOffset() * 60_000,
  );
  return localDate.toISOString().slice(0, 16);
}

interface Props {
  onSuccess: () => void;
}

export default function CreateResearchProjectForm({ onSuccess }: Props) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    question: "",
    researcher: "",
    themes: [] as ThemeKey[],
    tags: "",
    summary: "",
    body: "",
    sortOrder: 0,
    publishedAt: toLocalDateTimeValue(new Date()),
    themeSummary: {} as Partial<Record<ThemeKey, string>>,
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

  async function handleSubmit() {
    if (!form.question || !form.researcher || form.themes.length === 0) {
      toast.error(
        "Please fill in question, researcher and at least one theme.",
      );
      return;
    }
    setLoading(true);
    try {
      await dispatch(
        createResearchProjectAsync({
          question: form.question,
          questionSearch: form.question.toLowerCase(),
          researcher: form.researcher,
          themes: form.themes,
          tags: form.tags,
          summary: form.summary,
          themeSummary: form.themeSummary,
          sortOrder: form.sortOrder,
          publishedAt: new Date(form.publishedAt),
        }),
      ).unwrap();
      toast.success("Research project created!");
      onSuccess();
    } catch (err) {
      toast.error("Failed to create research project.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const inputCls =
    "w-full rounded-lg border border-transparent bg-white p-3 text-sm text-black outline-none placeholder:text-neutral-400 focus:border-neutral-300";

  return (
    <div className="h-full min-h-0 w-full flex flex-row px-6 gap-4 pb-4">
      {/* Left: Fields */}
      <div className="flex-none w-[470px] flex flex-col gap-4 h-full min-h-0">
        <div
          data-lenis-prevent
          className="flex-1 min-h-0 p-8 flex flex-col gap-4 bg-neutral-200 rounded-xl overflow-y-auto"
        >
          <form className="flex flex-col gap-6">
            <div>
              <label className="text-sm font-medium text-black">
                Research Question *
              </label>
              <textarea
                value={form.question}
                onChange={(e) => updateField("question", e.target.value)}
                rows={2}
                placeholder="Enter research question"
                className={inputCls}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-black">
                Researcher *
              </label>
              <input
                type="text"
                value={form.researcher}
                onChange={(e) => updateField("researcher", e.target.value)}
                placeholder="Enter researcher name"
                className={inputCls}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-black">Themes *</label>
              <div className="mt-1 flex flex-wrap gap-2">
                {themeOptions.map((t) => (
                  <button
                    key={t.value}
                    type="button"
                    onClick={() => toggleTheme(t.value)}
                    className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                      form.themes.includes(t.value)
                        ? "bg-neutral-800 text-white"
                        : "bg-white text-black hover:bg-neutral-100"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-black">Tags</label>
              <input
                type="text"
                value={form.tags}
                onChange={(e) => updateField("tags", e.target.value)}
                placeholder="e.g. Artificial Intelligence · Agriculture"
                className={inputCls}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-black">Summary</label>
              <textarea
                value={form.summary}
                onChange={(e) => updateField("summary", e.target.value)}
                rows={4}
                placeholder="Add a summary"
                className={inputCls}
              />
            </div>

            {form.themes.map((theme) => (
              <div key={theme}>
                <label className="text-sm font-medium text-black">
                  Theme summary (
                  {themeOptions.find((t) => t.value === theme)?.label})
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
              <label className="text-sm font-medium text-black">
                Sort order
              </label>
              <input
                type="number"
                value={form.sortOrder}
                onChange={(e) =>
                  updateField("sortOrder", parseInt(e.target.value) || 0)
                }
                className={inputCls}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-black">
                Published at
              </label>
              <input
                type="datetime-local"
                value={form.publishedAt}
                onChange={(e) => updateField("publishedAt", e.target.value)}
                className={inputCls}
              />
            </div>
          </form>
        </div>

        <div className="w-full flex flex-row items-center justify-center">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            style={{ backgroundColor: "black", color: "white" }}
            className={`w-full flex flex-row justify-center items-center rounded-lg h-[40px] font-semibold text-sm transition-all duration-200 whitespace-nowrap ${
              loading
                ? "cursor-not-allowed opacity-30"
                : "active:scale-[99%] hover:scale-105"
            }`}
          >
            {loading ? "Creating..." : "Create Project"}
          </button>
        </div>
      </div>

      {/* Right: Content editor */}
      <div className="flex-1 flex rounded-xl flex-col gap-3 h-full overflow-hidden bg-neutral-200 p-6 relative">
        <RichTextEditor
          value={form.body}
          onChange={(v) => updateField("body", v)}
        />
      </div>
    </div>
  );
}
