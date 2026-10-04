import { API_URL } from "../type/constants";
import type { User } from "@api";

export const fetchUserProfile = async (): Promise<User | null> => {
  const response = await fetch(`${API_URL}/users/me`, {
    credentials: "include",
  });

  /** @todo Role based auth */
  if (!response.ok) {
    // throw new Error("Failed to fetch user profile");
    return null;
  }

  const data = await response.json();
  // console.log("User profile data:", data); // Debug log
  return data;
};

export const fetchLogout = async () => {
  const response = await fetch(`${API_URL}/users/logout`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Failed to logout");
  }

  // console.log("Logout successful");
  return true;
};
