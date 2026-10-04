import type { LoaderFunctionArgs } from "react-router-dom";
import type { Store } from "../../../../api/src/database/entity/store.entity";
import { API_URL } from "../type/constants";

export const fetchStoreList = async (): Promise<Store[] | null> => {
  const response = await fetch(`${API_URL}/stores`, {
    credentials: "include",
  });

  /** @todo Role based auth */
  if (!response.ok) {
    // throw new Error("Failed to fetch store list");
    return null;
  }

  const data = await response.json();
  console.log("Store list data:", data); // Debug log
  return data;
};

export const fetchCreateStore = async (
  name: string,
  slug: string,
): Promise<Store> => {
  const response = await fetch(`${API_URL}/stores`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ name, slug }),
  });

  if (!response.ok) {
    throw new Error("Failed to create store");
  }

  const data = await response.json();
  console.log("Created store data:", data); // Debug log
  return data;
};

export const fetchStoreDetails = async (
  args: LoaderFunctionArgs<{ id: string }>,
): Promise<Store | null> => {
  const { params } = args;
  const response = await fetch(`${API_URL}/stores/${params.id}`, {
    credentials: "include",
  });

  if (!response.ok) {
    // throw new Error("Failed to fetch store details");
    return null;
  }

  const data = await response.json();
  console.log("Store details data:", data); // Debug log
  return data;
};

export const fetchUpdateStore = async (
  id: string,
  name: string,
  slug: string,
): Promise<Store> => {
  const response = await fetch(`${API_URL}/stores/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ name, slug }),
  });

  if (!response.ok) {
    throw new Error("Failed to update store");
  }

  const data = await response.json();
  console.log("Updated store data:", data);
  return data;
};
