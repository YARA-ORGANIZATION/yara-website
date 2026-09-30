"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseClient";
import { logInWithEmail, signOutAuth } from "@/backend/firebase/auth/auth_func";
import {
  setSessionCookie,
  getSessionCookie,
  destroySessionCookie,
  type SessionData,
} from "./sessions";

interface AuthContextValue {
  sessionData: SessionData;
  logInWithEmail: (email: string, password: string) => Promise<unknown>;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
  sessionData: {},
  logInWithEmail: async () => {},
  logOut: async () => {},
});

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [sessionData, setSessionData] = useState<SessionData>(getSessionCookie);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const session: SessionData = { email: user.email ?? undefined, uid: user.uid };
        setSessionCookie(session);
        setSessionData(session);
      } else {
        destroySessionCookie();
        setSessionData({});
      }
    });
    return () => unsubscribe();
  }, []);

  async function handleLogOut() {
    destroySessionCookie();
    setSessionData({});
    await signOutAuth();
  }

  return (
    <AuthContext.Provider
      value={{
        sessionData,
        logInWithEmail,
        logOut: handleLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
