import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { storage } from "../../../../firebaseClient";

export async function uploadFile({
  file,
  fileID = uuidv4(),
  folderPath,
}: {
  file: File;
  fileID?: string;
  folderPath: string;
}): Promise<string> {
  const storageRef = ref(storage, `${folderPath}/${fileID}`);
  const snapshot = await uploadBytes(storageRef, file);
  return await getDownloadURL(snapshot.ref);
}

export async function deleteFile({ objectUrl }: { objectUrl: string }) {
  const imageRef = ref(storage, objectUrl);
  await deleteObject(imageRef).catch((error) => {
    console.warn("Error deleting file:", error);
  });
}

function base64ToBlob(base64: string, contentType: string): Blob {
  const byteCharacters = atob(base64);
  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += 512) {
    const slice = byteCharacters.slice(offset, offset + 512);
    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    byteArrays.push(new Uint8Array(byteNumbers));
  }
  return new Blob(byteArrays, { type: contentType });
}

export function extractFirebaseStorageUrls(htmlContent: string): string[] {
  if (!htmlContent) return [];
  const firebaseUrlRegex =
    /<img[^>]+src=["'](https:\/\/firebasestorage\.googleapis\.com[^"']+)["'][^>]*>/g;
  const urls: string[] = [];
  for (const match of htmlContent.matchAll(firebaseUrlRegex)) {
    urls.push(match[1].replace(/&amp;/g, "&"));
  }
  return urls;
}

export async function processContentImages(htmlContent: string): Promise<string> {
  if (!htmlContent) return htmlContent;

  const base64ImageRegex = /<img[^>]+src="data:image\/([^;]+);base64,([^"]+)"[^>]*>/g;
  let processedContent = htmlContent;

  for (const match of htmlContent.matchAll(base64ImageRegex)) {
    try {
      const fullImgTag = match[0];
      const imageType = match[1];
      const base64Data = match[2];

      const blob = base64ToBlob(base64Data, `image/${imageType}`);
      const file = new File([blob], `${uuidv4()}.${imageType}`, { type: `image/${imageType}` });

      const downloadURL = await uploadFile({
        file,
        fileID: uuidv4(),
        folderPath: "stories/content-images",
      });

      const newImgTag = fullImgTag.replace(
        /src="data:image\/[^;]+;base64,[^"]+"/,
        `src="${downloadURL}"`,
      );
      processedContent = processedContent.replace(fullImgTag, newImgTag);
    } catch (error) {
      console.error("Error processing image:", error);
    }
  }

  return processedContent;
}

export async function cleanupRemovedImages(
  oldContent: string,
  newContent: string,
): Promise<void> {
  if (!oldContent) return;

  const oldUrls = extractFirebaseStorageUrls(oldContent);
  const newUrls = extractFirebaseStorageUrls(newContent);
  const removedUrls = oldUrls.filter((url) => !newUrls.includes(url));
  const contentImageUrls = removedUrls.filter((url) => url.includes("stories%2Fcontent-images"));

  for (const url of contentImageUrls) {
    try {
      await deleteFile({ objectUrl: url });
    } catch (error) {
      console.error("Error deleting removed image:", url, error);
    }
  }
}
