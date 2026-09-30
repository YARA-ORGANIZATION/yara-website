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
  orderBy,
} from "firebase/firestore";
import { db } from "../../../../../firebaseClient";
import type {
  CreateResearchProjectSchema,
  FilterResearchProjectsSchema,
  ListResponseResearchProjectsSchema,
  ResearchProjectSchema,
  ResponseResearchProjectSchema,
  UpdateResearchProjectWithIdSchema,
} from "@/backend/models/research_projects";
import type { ThemeKey } from "@/lib/research";
import { ResponseIndicator, type ResponseIndicatorValues } from "@/backend/models/_shared";
import { buildFirestoreQuery, errorHandler } from "../_base";
import { dbInfoAggregatorRef, dbInfoSitemapRef } from "../_dbInfo";
import { v4 as uuidv4 } from "uuid";

const dbCollectionName = "research_projects";
const dbCollection = collection(db, dbCollectionName);

export async function filterResearchProjectsApi(
  requestData: FilterResearchProjectsSchema,
): Promise<[ListResponseResearchProjectsSchema | string, ResponseIndicatorValues]> {
  try {
    const q = buildFirestoreQuery(requestData, dbCollection);
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return [
        { data: [], recordsCount: 0, message: "No records returned" } as ListResponseResearchProjectsSchema,
        ResponseIndicator.SUCCESS,
      ];
    }

    const data: ResearchProjectSchema[] = [];
    querySnapshot.forEach((docSnap) => {
      const d = docSnap.data();
      data.push({
        id: docSnap.id,
        ...d,
        publishedAt: d.publishedAt instanceof Timestamp ? d.publishedAt.toDate() : d.publishedAt ?? (d.createdAt instanceof Timestamp ? d.createdAt.toDate() : d.createdAt),
        updatedAt: d.updatedAt instanceof Timestamp ? d.updatedAt.toDate() : d.updatedAt,
        createdAt: d.createdAt instanceof Timestamp ? d.createdAt.toDate() : d.createdAt,
      } as ResearchProjectSchema);
    });

    return [
      {
        data,
        recordsCount: data.length,
        lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1],
        message: "Research projects fetched",
      } as ListResponseResearchProjectsSchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: unknown) {
    return errorHandler(error as { message: string });
  }
}

export async function createResearchProjectApi(
  requestData: CreateResearchProjectSchema,
): Promise<[ResponseResearchProjectSchema | string, ResponseIndicatorValues]> {
  try {
    const id = uuidv4();

    const response = await runTransaction(db, async (transaction) => {
      const aggDoc = await transaction.get(dbInfoAggregatorRef);
      if (!aggDoc.exists()) throw "DBInfo document does not exist!";

      const newDocRef = doc(db, dbCollectionName, id);
      const newDocData = { ...requestData, createdAt: new Date(), updatedAt: new Date() };

      transaction.set(newDocRef, newDocData);
      transaction.update(dbInfoAggregatorRef, {
        research_projects: aggDoc.data().research_projects + 1,
      });
      transaction.update(dbInfoSitemapRef, { researchProjectIDs: arrayUnion(id) });

      return newDocData;
    });

    return [
      { data: response, message: "Research project created successfully" } as ResponseResearchProjectSchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: unknown) {
    return errorHandler(error as { message: string });
  }
}

export async function updateResearchProjectApi(
  requestData: UpdateResearchProjectWithIdSchema,
): Promise<[ResponseResearchProjectSchema | string, ResponseIndicatorValues]> {
  try {
    const response = await runTransaction(db, async (transaction) => {
      const docRef = doc(db, dbCollectionName, requestData.id);
      const updatedDocData = { ...requestData.data, updatedAt: new Date() };
      transaction.update(docRef, updatedDocData);
      return updatedDocData;
    });

    return [
      { data: response, message: "Research project updated successfully" } as ResponseResearchProjectSchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: unknown) {
    return errorHandler(error as { message: string });
  }
}

export async function getResearchProjectApi(
  id: string,
): Promise<[ResponseResearchProjectSchema | string, ResponseIndicatorValues]> {
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
            publishedAt: d.publishedAt instanceof Timestamp ? d.publishedAt.toDate() : d.publishedAt ?? (d.createdAt instanceof Timestamp ? d.createdAt.toDate() : d.createdAt),
            updatedAt: d.updatedAt instanceof Timestamp ? d.updatedAt.toDate() : d.updatedAt,
            createdAt: d.createdAt instanceof Timestamp ? d.createdAt.toDate() : d.createdAt,
          },
          message: "Research project fetched successfully",
        } as ResponseResearchProjectSchema,
        ResponseIndicator.SUCCESS,
      ];
    }
    return errorHandler({ message: "No such data found!" });
  } catch (error: unknown) {
    return errorHandler(error as { message: string });
  }
}

export async function getProjectsByThemeApi(
  theme: ThemeKey,
): Promise<[ListResponseResearchProjectsSchema | string, ResponseIndicatorValues]> {
  try {
    const q = query(dbCollection, where("themes", "array-contains", theme), orderBy("sortOrder", "asc"));
    const querySnapshot = await getDocs(q);

    const data: ResearchProjectSchema[] = [];
    querySnapshot.forEach((docSnap) => {
      const d = docSnap.data();
      data.push({
        id: docSnap.id,
        ...d,
        publishedAt: d.publishedAt instanceof Timestamp ? d.publishedAt.toDate() : d.publishedAt ?? (d.createdAt instanceof Timestamp ? d.createdAt.toDate() : d.createdAt),
        updatedAt: d.updatedAt instanceof Timestamp ? d.updatedAt.toDate() : d.updatedAt,
        createdAt: d.createdAt instanceof Timestamp ? d.createdAt.toDate() : d.createdAt,
      } as ResearchProjectSchema);
    });

    return [
      { data, recordsCount: data.length, message: "Projects fetched" } as ListResponseResearchProjectsSchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: unknown) {
    return errorHandler(error as { message: string });
  }
}

export async function deleteResearchProjectApi(
  data: ResearchProjectSchema,
): Promise<[ResponseResearchProjectSchema | string, ResponseIndicatorValues]> {
  try {
    const response = await runTransaction(db, async (transaction) => {
      const aggDoc = await transaction.get(dbInfoAggregatorRef);
      if (!aggDoc.exists()) throw "DBInfo document does not exist!";

      const docRef = doc(db, dbCollectionName, data.id);

      transaction.delete(docRef);
      transaction.update(dbInfoAggregatorRef, {
        research_projects: aggDoc.data().research_projects - 1,
      });
      transaction.update(dbInfoSitemapRef, { researchProjectIDs: arrayRemove(data.id) });

      return data;
    });

    return [
      { data: response, message: "Research project deleted successfully" } as ResponseResearchProjectSchema,
      ResponseIndicator.SUCCESS,
    ];
  } catch (error: unknown) {
    return errorHandler(error as { message: string });
  }
}
