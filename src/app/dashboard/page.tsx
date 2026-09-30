"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";

export default function DashboardLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { logInWithEmail } = useAuth();
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await logInWithEmail(email, password);
      toast.success("Login successful");
      router.push("/dashboard/main");
    } catch {
      toast.error("There was an error logging you in");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-6 flex h-full flex-col items-center justify-center overflow-auto py-24 md:mx-12 lg:mx-24">
      <div className="flex w-full max-w-lg flex-col gap-6">
        <h3 className="text-center text-3xl md:text-4xl">Dashboard Login</h3>

        <form className="flex w-full max-w-[600px] flex-col gap-8 rounded-xl bg-neutral-100 p-4 md:p-8">
          <div className="flex flex-col gap-[6px]">
            <label className="text-sm font-medium text-black">
              Email address<span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              placeholder="Enter your email address"
              className="w-full rounded-lg border border-transparent bg-white p-3 text-base font-medium text-black outline-none placeholder:text-neutral-400 active:border-neutral-300 focus:border-neutral-300 md:text-sm lg:text-sm"
            />
          </div>

          <div className="flex flex-col gap-[6px]">
            <label className="text-sm font-medium text-black">
              Password<span className="text-red-700">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-transparent bg-white p-3 text-base font-medium text-black outline-none placeholder:text-neutral-400 active:border-neutral-300 focus:border-neutral-300 md:text-sm lg:text-sm"
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            disabled={loading || !email || !password}
            className={`${
              loading || !email || !password ? "cursor-not-allowed opacity-30" : "hover:scale-105 active:scale-[99%]"
            } flex h-[40px] w-full flex-row items-center justify-center rounded-lg bg-black text-sm font-semibold text-white transition-all duration-200`}
          >
            {loading ? "Signing in..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
