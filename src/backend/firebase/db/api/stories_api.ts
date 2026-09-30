import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  runTransaction,
  Timestamp,
  where,
  limit as firestoreLimit,
} from "firebase/firestore";
import { db } from "../../../../../firebaseClient";
import type {
  CreateStoryWithFileSchema,
  FilterStoriesSchema,
  ListResponseStoriesSchema,
  ResponseStorySchema,
  StorySchema,
  UpdateStoryWithFileSchema,
} from "@/backend/models/stories";
import { ResponseIndicator, type ResponseIndicatorValues } from "@/backend/models/_shared";
import { buildFirestoreQuery, errorHandler } from "../_base";
import { dbInfoAggregatorRef, dbInfoSitemapRef } from "../_dbInfo";
import { deleteFile, uploadFile } from "../../storage/storage_func";
import { v4 as uuidv4 } from "uuid";

const dbCollectionName = "stories";
const dbCollection = collection(db, dbCollectionName);
const storageFilePath = "images/stories";

export async function filterStoriesApi(
  requestData: FilterStoriesSchema,
): Promise<[ListResponseStoriesSchema | string, ResponseIndicatorValues]> {
  try {
    const q = buildFirestoreQuery(requestData, dbCollection);
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return [
        { data: [], recordsCount: 0, message: "No records returned" } as ListResponseStoriesSchema,
        ResponseIndicator.SUCCESS,
      ];
    }

    const data: StorySchema[] = [];
    querySnapshot.forEach((docSnap) => {
      const d = docSnap.data();
      data.push({
        id: docSnap.id,
        ...d,
        publishedAt: d.publishedAt instanceof Timestamp ? d.publishedAt.toDate() : d.publishedAt,
        updatedAt: d.updatedAt instanceof Timestamp ? d.updatedAt.toDate() : d.updatedAt,
        createdAt: d.createdAt instanceof Timestamp ? d.createdAt.toDate() : d.createdAt,
      } as StorySchema);
    });

    return [
      {
        data,
        recordsCount: data.length,
        lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1],
        message: "Stories fetched",
      } as ListResponseStoriesSchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: unknown) {
    return errorHandler(error as { message: string });
  }
}

async function isSlugTaken(slug: string): Promise<boolean> {
  const q = query(dbCollection, where("slug", "==", slug), firestoreLimit(1));
  const snap = await getDocs(q);
  return !snap.empty;
}

export async function createStoryApi(
  requestData: CreateStoryWithFileSchema,
): Promise<[ResponseStorySchema | string, ResponseIndicatorValues]> {
  try {
    if (await isSlugTaken(requestData.data.slug)) {
      return errorHandler({ message: `A story with the slug "${requestData.data.slug}" already exists.` });
    }

    const id = uuidv4();
    let mainImageUrl: string | null = null;

    if (requestData.file) {
      mainImageUrl = await uploadFile({
        file: requestData.file,
        fileID: id,
        folderPath: storageFilePath,
      });
    }

    const newData = {
      ...requestData.data,
      mainImageUrl: mainImageUrl || requestData.data.mainImageUrl,
    };

    const response = await runTransaction(db, async (transaction) => {
      const aggDoc = await transaction.get(dbInfoAggregatorRef);
      if (!aggDoc.exists()) throw "DBInfo document does not exist!";

      const newDocRef = doc(db, dbCollectionName, id);
      const newDocData = { ...newData, createdAt: new Date(), updatedAt: new Date() };

      transaction.set(newDocRef, newDocData);
      transaction.update(dbInfoAggregatorRef, { stories: aggDoc.data().stories + 1 });
      transaction.update(dbInfoSitemapRef, { storySlugs: arrayUnion(newData.slug) });

      return newDocData;
    });

    return [
      { data: response, message: "Story created successfully" } as ResponseStorySchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: unknown) {
    return errorHandler(error as { message: string });
  }
}

export async function updateStoryApi(
  requestData: UpdateStoryWithFileSchema,
): Promise<[ResponseStorySchema | string, ResponseIndicatorValues]> {
  try {
    if (requestData.data.slug) {
      const q = query(dbCollection, where("slug", "==", requestData.data.slug), firestoreLimit(1));
      const snap = await getDocs(q);
      if (!snap.empty && snap.docs[0].id !== requestData.id) {
        return errorHandler({ message: `A story with the slug "${requestData.data.slug}" already exists.` });
      }
    }

    let mainImageUrl = requestData.data.mainImageUrl || "";
    const id = requestData.id;

    if (requestData.file) {
      mainImageUrl = await uploadFile({
        file: requestData.file,
        fileID: id,
        folderPath: storageFilePath,
      });
    }

    const updatedData = { ...requestData.data, mainImageUrl };

    const response = await runTransaction(db, async (transaction) => {
      const docRef = doc(db, dbCollectionName, id);
      const updatedDocData = { ...updatedData, updatedAt: new Date() };
      transaction.update(docRef, updatedDocData);
      return updatedDocData;
    });

    return [
      { data: response, message: "Story updated successfully" } as ResponseStorySchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: unknown) {
    return errorHandler(error as { message: string });
  }
}

export async function getStoryApi(
  id: string,
): Promise<[ResponseStorySchema | string, ResponseIndicatorValues]> {
  try {
    const docRef = doc(db, dbCollectionName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const d = docSnap.data();
      return [
        {
          data: {
            id: docSnap.id,
            ...d,
            publishedAt: d.publishedAt instanceof Timestamp ? d.publishedAt.toDate() : d.publishedAt,
            updatedAt: d.updatedAt instanceof Timestamp ? d.updatedAt.toDate() : d.updatedAt,
            createdAt: d.createdAt instanceof Timestamp ? d.createdAt.toDate() : d.createdAt,
          },
          message: "Story fetched successfully",
        } as ResponseStorySchema,
        ResponseIndicator.SUCCESS,
      ];
    }
    return errorHandler({ message: "No such data found!" });
  } catch (error: unknown) {
    return errorHandler(error as { message: string });
  }
}

export async function getStoryBySlugApi(
  slug: string,
): Promise<[ResponseStorySchema | string, ResponseIndicatorValues]> {
  try {
    const q = query(dbCollection, where("slug", "==", slug), firestoreLimit(1));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return errorHandler({ message: "No such data found!" });
    }

    const docSnap = querySnapshot.docs[0];
    const d = docSnap.data();
    return [
      {
        data: {
          id: docSnap.id,
          ...d,
          publishedAt: d.publishedAt instanceof Timestamp ? d.publishedAt.toDate() : d.publishedAt,
          updatedAt: d.updatedAt instanceof Timestamp ? d.updatedAt.toDate() : d.updatedAt,
          createdAt: d.createdAt instanceof Timestamp ? d.createdAt.toDate() : d.createdAt,
        },
        message: "Story fetched successfully",
      } as ResponseStorySchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: unknown) {
    return errorHandler(error as { message: string });
  }
}

export async function deleteStoryApi(
  data: StorySchema,
): Promise<[ResponseStorySchema | string, ResponseIndicatorValues]> {
  try {
    const response = await runTransaction(db, async (transaction) => {
      const aggDoc = await transaction.get(dbInfoAggregatorRef);
      if (!aggDoc.exists()) throw "DBInfo document does not exist!";

      const docRef = doc(db, dbCollectionName, data.id);

      if (data.mainImageUrl) {
        await deleteFile({ objectUrl: data.mainImageUrl });
      }

      transaction.delete(docRef);
      transaction.update(dbInfoAggregatorRef, { stories: aggDoc.data().stories - 1 });
      transaction.update(dbInfoSitemapRef, { storySlugs: arrayRemove(data.slug) });

      return data;
    });

    return [
      { data: response, message: "Story deleted successfully" } as ResponseStorySchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: unknown) {
    return errorHandler(error as { message: string });
  }
}
