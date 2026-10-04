import {
  createContext,
  redirect,
  type MiddlewareFunction,
} from "react-router-dom";
import { fetchLogout, fetchUserProfile } from "../query/auth.query";
import type { User } from "@api";

export const userContext = createContext<User | null>(null);

export const authMiddleware: MiddlewareFunction = async ({ context }) => {
  const user = await fetchUserProfile();
  console.log("Fetched user:", user);

  if (!user) {
    throw redirect("/login");
  }

  context.set(userContext, user);
};

export const logoutMiddleware: MiddlewareFunction = async () => {
  await fetchLogout();
  throw redirect("/login");
};
