import Cookies from "js-cookie";

const SESSION_KEY = "session";
const EXPIRY_DAYS = 14;

export interface SessionData {
  email?: string;
  uid?: string;
}

export function setSessionCookie(session: SessionData) {
  Cookies.remove(SESSION_KEY);
  Cookies.set(SESSION_KEY, JSON.stringify(session), { expires: EXPIRY_DAYS });
}

export function getSessionCookie(): SessionData {
  const cookie = Cookies.get(SESSION_KEY);
  if (!cookie) return {};
  try {
    return JSON.parse(cookie);
  } catch {
    return {};
  }
}

export function destroySessionCookie() {
  Cookies.remove(SESSION_KEY);
}
