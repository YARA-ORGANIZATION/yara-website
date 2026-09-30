"use client";

import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import Image from "next/image";
import { Paperclip, Trash2, ImageIcon } from "lucide-react";

export interface ImageUploadRef {
  resetState: () => void;
}

interface Props {
  onImageUpload: (file: File | null) => void;
  labelText?: string;
  isRequired?: boolean;
  initImgUrl?: string | null;
  maxWidthPx?: number;
  isCircular?: boolean;
}

const ImageUpload = forwardRef<ImageUploadRef, Props>(function ImageUpload(
  { onImageUpload, labelText = "Image", isRequired = false, initImgUrl, maxWidthPx = 1200, isCircular = false },
  ref,
) {
  const [preview, setPreview] = useState<string | null>(initImgUrl ?? null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const maxFileSize = 5 * 1024 * 1024;

  useImperativeHandle(ref, () => ({
    resetState: () => {
      setPreview(null);
      setErrorMessage(null);
      onImageUpload(null);
      if (inputRef.current) inputRef.current.value = "";
    },
  }));

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > maxFileSize) {
      setErrorMessage("File size exceeds 5 MB. Please upload a smaller file.");
      setPreview(null);
      return;
    }

    const resized = await resizeImage(file, maxWidthPx);
    const url = URL.createObjectURL(resized);
    setPreview(url);
    setErrorMessage(null);
    onImageUpload(resized);
  }

  function handleClear() {
    setPreview(null);
    setErrorMessage(null);
    onImageUpload(null);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div className="flex flex-col gap-1">
      <label className="flex flex-row justify-between text-sm font-medium text-black">
        <span>
          {labelText}
          {isRequired && <span className="text-red-700">*</span>}
        </span>
      </label>

      <input type="file" accept="image/png, image/jpeg, image/jpg" hidden ref={inputRef} onChange={handleFileChange} />

      <div
        onClick={() => (preview ? handleClear() : inputRef.current?.click())}
        className="flex cursor-pointer flex-row items-center justify-between rounded-lg border border-transparent bg-white p-3 text-sm font-medium text-black placeholder:text-neutral-400 active:border-neutral-300 focus:border-neutral-300 md:text-sm"
      >
        <span className="text-neutral-400">{preview ? "Remove image" : "Attach file (PNG/JPG, size below 5MB)"}</span>
        {preview ? <Trash2 className="size-4 text-red-700" /> : <Paperclip className="size-4 rotate-[135deg] text-neutral-500" />}
      </div>

      <div
        className={`${isCircular ? "rounded-full aspect-square w-[200px]" : "rounded-2xl aspect-[16/9] w-full"} mt-4 flex flex-row items-center justify-center bg-neutral-600`}
      >
        {preview || initImgUrl ? (
          <Image
            className={`${isCircular ? "rounded-full h-full w-full" : "rounded-2xl h-full w-full"}`}
            src={(preview || initImgUrl) as string}
            alt=""
            width={500}
            height={500}
            unoptimized
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        ) : (
          <ImageIcon className="size-16 text-neutral-400" />
        )}
      </div>

      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
});

async function resizeImage(file: File, maxWidth: number): Promise<File> {
  return new Promise((resolve) => {
    const img = document.createElement("img");
    img.onload = () => {
      if (img.width <= maxWidth) {
        resolve(file);
        return;
      }
      const canvas = document.createElement("canvas");
      const ratio = maxWidth / img.width;
      canvas.width = maxWidth;
      canvas.height = img.height * ratio;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      let quality = 0.9;
      let dataUrl = canvas.toDataURL("image/jpeg", quality);
      const maxOutputSize = 2 * 1024 * 1024;
      while (dataUrl.length > maxOutputSize && quality > 0.1) {
        quality -= 0.05;
        dataUrl = canvas.toDataURL("image/jpeg", quality);
      }

      canvas.toBlob(
        (blob) => {
          resolve(new File([blob!], file.name, { type: "image/jpeg" }));
        },
        "image/jpeg",
        quality,
      );
    };
    img.src = URL.createObjectURL(file);
  });
}

export default ImageUpload;
