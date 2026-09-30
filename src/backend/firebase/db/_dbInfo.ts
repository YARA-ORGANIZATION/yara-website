import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../../firebaseClient";
import type { DBInfoAggregatorSchema, DBInfoSitemapSchema } from "@/backend/models/_dbInfo";
import { ResponseIndicator, type ResponseIndicatorValues } from "@/backend/models/_shared";
import { errorHandler } from "./_base";

const dbCollectionName = "db_info";
const aggregatorID = "aggregators";
const sitemapID = "sitemap";

export const dbInfoAggregatorRef = doc(db, dbCollectionName, aggregatorID);
export const dbInfoSitemapRef = doc(db, dbCollectionName, sitemapID);

export async function getDBInfoAggregator(): Promise<
  [{ data: DBInfoAggregatorSchema; message: string } | string, ResponseIndicatorValues]
> {
  try {
    const docSnap = await getDoc(dbInfoAggregatorRef);
    if (docSnap.exists()) {
      return [
        { data: docSnap.data() as DBInfoAggregatorSchema, message: "Aggregators fetched" },
        ResponseIndicator.SUCCESS,
      ];
    }
    return errorHandler({ message: "No such data found!" });
  } catch (error: unknown) {
    return errorHandler(error as { message: string });
  }
}

export async function getDBInfoSitemap(): Promise<
  [{ data: DBInfoSitemapSchema; message: string } | string, ResponseIndicatorValues]
> {
  try {
    const docSnap = await getDoc(dbInfoSitemapRef);
    if (docSnap.exists()) {
      return [
        { data: docSnap.data() as DBInfoSitemapSchema, message: "Sitemap fetched" },
        ResponseIndicator.SUCCESS,
      ];
    }
    return errorHandler({ message: "No such data found!" });
  } catch (error: unknown) {
    return errorHandler(error as { message: string });
  }
}
