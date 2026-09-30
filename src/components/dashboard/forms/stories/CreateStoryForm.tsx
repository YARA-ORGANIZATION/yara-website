"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/redux/app/hooks";
import { createStoryAsync } from "@/redux/features/stories/actions";
import { processContentImages } from "@/backend/firebase/storage/storage_func";
import type {
  CreateStorySchema,
  StoryCategory,
} from "@/backend/models/stories";
import ImageUpload, { type ImageUploadRef } from "../../ImageUpload";
import RichTextEditor from "../../RichTextEditor";

const categories: { label: string; value: StoryCategory }[] = [
  { label: "Spotlight", value: "spotlight" },
  { label: "Insight", value: "insight" },
  { label: "In the Press", value: "press" },
];

const themeOptions = [
  { label: "Artificial Intelligence", value: "ai" },
  { label: "Climate", value: "climate" },
  { label: "Public Health", value: "health" },
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

interface Props {
  onSuccess: () => void;
}

export default function CreateStoryForm({ onSuccess }: Props) {
  const dispatch = useAppDispatch();
  const imageRef = useRef<ImageUploadRef>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    category: "insight" as StoryCategory,
    excerpt: "",
    body: "",
    externalUrl: "",
    publication: "",
    author: "",
    people: "",
    themes: [] as string[],
    mainImageAlt: "",
    mainImageCaption: "",
    publishedAt: new Date().toISOString().slice(0, 16),
  });

  function updateField(field: string, value: string | string[]) {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === "title") next.slug = slugify(value as string);
      return next;
    });
  }

  function toggleTheme(theme: string) {
    setForm((prev) => ({
      ...prev,
      themes: prev.themes.includes(theme)
        ? prev.themes.filter((t) => t !== theme)
        : [...prev.themes, theme],
    }));
  }

  async function handleSubmit() {
    if (!form.title || !form.slug || !form.excerpt) {
      toast.error("Please fill in the required fields.");
      return;
    }
    setLoading(true);
    try {
      const processedBody = await processContentImages(form.body);
      const data: CreateStorySchema = {
        title: form.title,
        titleSearch: form.title.toLowerCase(),
        slug: form.slug,
        category: form.category,
        excerpt: form.excerpt,
        body: processedBody,
        mainImageUrl: null,
        mainImageAlt: form.mainImageAlt || null,
        mainImageCaption: form.mainImageCaption || null,
        externalUrl: form.externalUrl || null,
        publication: form.publication || null,
        author: form.author || null,
        people: form.people ? form.people.split(",").map((p) => p.trim()) : [],
        themes: form.themes,
        publishedAt: new Date(form.publishedAt),
        seoTitle: form.title || null,
        seoDescription: form.excerpt || null,
      };
      await dispatch(createStoryAsync({ data, file })).unwrap();
      toast.success("Story created!");
      onSuccess();
    } catch (err) {
      toast.error("Failed to create story.");
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
            <ImageUpload
              ref={imageRef}
              onImageUpload={setFile}
              labelText="Cover image"
            />

            <div>
              <label className="text-sm font-medium text-black">Title *</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => updateField("title", e.target.value)}
                placeholder="Enter story title"
                className={inputCls}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-black">Slug *</label>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => updateField("slug", e.target.value)}
                className={inputCls}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-black">
                Category *
              </label>
              <div className="mt-1 flex gap-2">
                {categories.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => updateField("category", c.value)}
                    className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                      form.category === c.value
                        ? "bg-neutral-800 text-white"
                        : "bg-white text-black hover:bg-neutral-100"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-black">
                Excerpt *
              </label>
              <textarea
                value={form.excerpt}
                onChange={(e) => updateField("excerpt", e.target.value)}
                rows={3}
                maxLength={3000}
                placeholder="Add summary for the story"
                className={inputCls}
              />
              <p className="mt-1 text-right text-xs text-neutral-400">
                {form.excerpt.length}/3000
              </p>
            </div>

            <div>
              <label className="text-sm font-medium text-black">Author</label>
              <input
                type="text"
                value={form.author}
                onChange={(e) => updateField("author", e.target.value)}
                placeholder="Enter author name"
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

            <div>
              <label className="text-sm font-medium text-black">Themes</label>
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
              <label className="text-sm font-medium text-black">
                Image alt text
              </label>
              <input
                type="text"
                value={form.mainImageAlt}
                onChange={(e) => updateField("mainImageAlt", e.target.value)}
                className={inputCls}
              />
            </div>

            {form.category === "press" && (
              <>
                <div>
                  <label className="text-sm font-medium text-black">
                    External URL
                  </label>
                  <input
                    type="url"
                    value={form.externalUrl}
                    onChange={(e) => updateField("externalUrl", e.target.value)}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-black">
                    Publication
                  </label>
                  <input
                    type="text"
                    value={form.publication}
                    onChange={(e) => updateField("publication", e.target.value)}
                    className={inputCls}
                  />
                </div>
              </>
            )}
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
            {loading ? "Creating..." : "Create Story"}
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
