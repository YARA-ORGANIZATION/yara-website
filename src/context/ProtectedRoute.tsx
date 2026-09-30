"use client";

import { useRouter } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { sessionData } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!sessionData.uid) {
      router.push("/dashboard");
    }
  }, [sessionData.uid, router]);

  if (!sessionData.uid) return null;

  return <>{children}</>;
}
