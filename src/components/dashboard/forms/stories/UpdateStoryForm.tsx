"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/redux/app/hooks";
import { updateStoryAsync, deleteStoryAsync } from "@/redux/features/stories/actions";
import { processContentImages, cleanupRemovedImages } from "@/backend/firebase/storage/storage_func";
import type { StorySchema, StoryCategory } from "@/backend/models/stories";
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

interface Props {
  data: StorySchema;
  onSuccess: () => void;
}

export default function UpdateStoryForm({ data, onSuccess }: Props) {
  const dispatch = useAppDispatch();
  const imageRef = useRef<ImageUploadRef>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const originalBody = data.body;

  const [form, setForm] = useState({
    title: data.title,
    slug: data.slug,
    category: data.category,
    excerpt: data.excerpt,
    body: data.body,
    externalUrl: data.externalUrl ?? "",
    publication: data.publication ?? "",
    author: data.author ?? "",
    people: data.people?.join(", ") ?? "",
    themes: data.themes ?? [],
    mainImageAlt: data.mainImageAlt ?? "",
    mainImageCaption: data.mainImageCaption ?? "",
    publishedAt: data.publishedAt instanceof Date
      ? data.publishedAt.toISOString().slice(0, 16)
      : new Date(data.publishedAt).toISOString().slice(0, 16),
    seoTitle: data.seoTitle ?? "",
    seoDescription: data.seoDescription ?? "",
  });

  function updateField(field: string, value: string | string[]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleTheme(theme: string) {
    setForm((prev) => ({
      ...prev,
      themes: prev.themes.includes(theme)
        ? prev.themes.filter((t) => t !== theme)
        : [...prev.themes, theme],
    }));
  }

  async function handleUpdate() {
    if (!form.title || !form.slug || !form.excerpt) {
      toast.error("Please fill in the required fields.");
      return;
    }
    setLoading(true);
    try {
      const processedBody = await processContentImages(form.body);
      await cleanupRemovedImages(originalBody, processedBody);

      await dispatch(
        updateStoryAsync({
          id: data.id,
          data: {
            title: form.title,
            titleSearch: form.title.toLowerCase(),
            slug: form.slug,
            category: form.category,
            excerpt: form.excerpt,
            body: processedBody,
            mainImageUrl: data.mainImageUrl,
            mainImageAlt: form.mainImageAlt || null,
            mainImageCaption: form.mainImageCaption || null,
            externalUrl: form.externalUrl || null,
            publication: form.publication || null,
            author: form.author || null,
            people: form.people ? form.people.split(",").map((p) => p.trim()) : [],
            themes: form.themes,
            publishedAt: new Date(form.publishedAt),
            seoTitle: form.seoTitle || null,
            seoDescription: form.seoDescription || null,
          },
          file,
        }),
      ).unwrap();
      toast.success("Story updated!");
      onSuccess();
    } catch (err) {
      toast.error("Failed to update story.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (!confirm("Are you sure you want to delete this story?")) return;
    setLoading(true);
    try {
      await dispatch(deleteStoryAsync(data)).unwrap();
      toast.success("Story deleted.");
      onSuccess();
    } catch (err) {
      toast.error("Failed to delete story.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  const inputCls =
    "w-full rounded-lg border border-transparent bg-white p-3 text-base font-medium text-black outline-none placeholder:text-neutral-400 active:border-neutral-300 focus:border-neutral-300 md:text-sm lg:text-sm";

  return (
    <div className="grid gap-8 lg:grid-cols-[340px_1fr]">
      <div className="space-y-5">
        <ImageUpload
          ref={imageRef}
          onImageUpload={setFile}
          labelText="Cover image"
          initImgUrl={data.mainImageUrl}
        />
        <div>
          <label className="text-sm font-medium text-black">Title *</label>
          <input type="text" value={form.title} onChange={(e) => updateField("title", e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className="text-sm font-medium text-black">Slug *</label>
          <input type="text" value={form.slug} onChange={(e) => updateField("slug", e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className="text-sm font-medium text-black">Category *</label>
          <div className="flex gap-2">
            {categories.map((c) => (
              <button
                key={c.value}
                type="button"
                onClick={() => updateField("category", c.value)}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  form.category === c.value ? "bg-forest text-lime" : "bg-cream text-ink ring-1 ring-line hover:ring-forest"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-black">Excerpt *</label>
          <textarea value={form.excerpt} onChange={(e) => updateField("excerpt", e.target.value)} rows={3} className={inputCls} />
        </div>
        <div>
          <label className="text-sm font-medium text-black">Image alt text</label>
          <input type="text" value={form.mainImageAlt} onChange={(e) => updateField("mainImageAlt", e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className="text-sm font-medium text-black">Author</label>
          <input type="text" value={form.author} onChange={(e) => updateField("author", e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className="text-sm font-medium text-black">Published at</label>
          <input type="datetime-local" value={form.publishedAt} onChange={(e) => updateField("publishedAt", e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className="text-sm font-medium text-black">Themes</label>
          <div className="flex flex-wrap gap-2">
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
        {form.category === "press" && (
          <>
            <div>
              <label className="text-sm font-medium text-black">External URL</label>
              <input type="url" value={form.externalUrl} onChange={(e) => updateField("externalUrl", e.target.value)} className={inputCls} />
            </div>
            <div>
              <label className="text-sm font-medium text-black">Publication</label>
              <input type="text" value={form.publication} onChange={(e) => updateField("publication", e.target.value)} className={inputCls} />
            </div>
          </>
        )}
      </div>
      <div className="space-y-5">
        <div>
          <label className="text-sm font-medium text-black">Body</label>
          <RichTextEditor value={form.body} onChange={(v) => updateField("body", v)} />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-black">SEO title</label>
            <input type="text" value={form.seoTitle} onChange={(e) => updateField("seoTitle", e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className="text-sm font-medium text-black">SEO description</label>
            <input type="text" value={form.seoDescription} onChange={(e) => updateField("seoDescription", e.target.value)} className={inputCls} />
          </div>
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
            {loading ? "Saving..." : "Update Story"}
          </button>
        </div>
      </div>
    </div>
  );
}
