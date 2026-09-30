import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../../../firebaseClient";

export async function logInWithEmail(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function signOutAuth() {
  return signOut(auth);
}
