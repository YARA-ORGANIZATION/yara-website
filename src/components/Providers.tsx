"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import Lenis from "lenis";
import { store } from "@/redux/app/store";
import { AuthContextProvider } from "@/context/AuthContext";

export default function Providers({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, [mounted]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Provider store={store}>
      <AuthContextProvider>
        {children}
        <Toaster position="top-right" />
      </AuthContextProvider>
    </Provider>
  );
}
