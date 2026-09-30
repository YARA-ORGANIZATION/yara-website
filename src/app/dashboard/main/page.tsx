"use client";

import { useState, useEffect } from "react";
import ProtectedRoute from "@/context/ProtectedRoute";
import DashboardMain from "@/components/dashboard/DashboardMain";

export default function DashboardMainPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <ProtectedRoute>
      <DashboardMain />
    </ProtectedRoute>
  );
}
