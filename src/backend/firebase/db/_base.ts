import type { FilterDataRequest, ResponseIndicatorValues } from "@/backend/models/_shared";
import { ResponseIndicator } from "@/backend/models/_shared";
import {
  type CollectionReference,
  type Query,
  Timestamp,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";

export function errorHandler(error: { message: string }): [string, ResponseIndicatorValues] {
  console.error("ERROR => ", error);
  return [error.message, ResponseIndicator.ERROR];
}

export function buildFirestoreQuery<T extends Partial<FilterDataRequest>>(
  requestData: T,
  collectionRef: CollectionReference,
): Query {
  let q: Query = query(collectionRef);

  try {
    Object.entries(requestData).forEach(([key, value]) => {
      if (["orderBy", "orderDirection", "startAfterDoc", "startAfterDocQueue", "limit"].includes(key)) {
        return;
      }

      if (typeof value === "string") {
        q = query(
          q,
          where(key, ">=", value.toLowerCase()),
          where(key, "<=", value.toLowerCase() + ""),
        );
        requestData.orderBy = undefined;
        requestData.orderDirection = undefined;
      } else if (Array.isArray(value) && value.length > 0) {
        value.forEach((item) => {
          q = query(q, where(key, "array-contains", item));
        });
      } else if (value instanceof Timestamp) {
        q = query(q, where(key, "==", value));
      }
    });

    if (requestData.orderBy) {
      const direction = requestData.orderDirection ?? "asc";
      q = query(q, orderBy(requestData.orderBy, direction));
    }

    if (requestData.startAfterDocQueue && requestData.startAfterDocQueue.length > 0) {
      q = query(
        q,
        startAfter(requestData.startAfterDocQueue[requestData.startAfterDocQueue.length - 1]),
      );
    }

    if (requestData?.limit) {
      q = query(q, limit(requestData.limit));
    }
  } catch (error) {
    console.log(error);
  }

  return q;
}
