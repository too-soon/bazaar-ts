import { API_URL } from "../type/constants";

interface ApiCallOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  body?: any;
  headers?: Record<string, string>;
}

interface ApiCallResponse<T> {
  success: boolean;
  data: T | null;
  error?: string;
}

export const apiCall = async <T = any>(
  options: ApiCallOptions,
): Promise<ApiCallResponse<T>> => {
  const response = await fetch(`${API_URL}${options.path}`, {
    ...options,
    credentials: "include",
  });
  console.log("API Call Response:", response); // Debug log

  /** @todo Role based auth */
  if (!response.ok) {
    if (response.status === 401) {
      return { success: false, data: null, error: "Unauthorized" };
    }

    if (response.status === 403) {
      return { success: false, data: null, error: "Forbidden" };
    }

    if (response.status === 404) {
      return { success: false, data: null, error: "Not Found" };
    }

    if (response.status === 500) {
      return { success: false, data: null, error: "Internal Server Error" };
    }

    if (response.status === 503) {
      return { success: false, data: null, error: "Service Unavailable" };
    }

    if (response.status === 400) {
      return { success: false, data: null, error: "Bad Request" };
    }

    // throw new Error("Failed to fetch store list");
    return { success: false, data: null, error: "Failed to fetch data" };
  }

  const data = await response.json();
  return { success: true, data, error: undefined };
};

// export const fetchStoreList = async (): Promise<Store[] | null> => {
//   const response = await fetch(`${API_URL}/stores`, {
//     credentials: "include",
//   });

//   /** @todo Role based auth */
//   if (!response.ok) {
//     // throw new Error("Failed to fetch store list");
//     return null;
//   }

//   const data = await response.json();
//   console.log("Store list data:", data); // Debug log
//   return data;
// };

// export const fetchCreateStore = async (
//   name: string,
//   slug: string,
// ): Promise<Store> => {
//   const response = await fetch(`${API_URL}/stores`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include",
//     body: JSON.stringify({ name, slug }),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to create store");
//   }

//   const data = await response.json();
//   console.log("Created store data:", data); // Debug log
//   return data;
// };

// export const fetchStoreDetails = async (
//   args: LoaderFunctionArgs<{ id: string }>,
// ): Promise<Store | null> => {
//   const { params } = args;
//   const response = await fetch(`${API_URL}/stores/${params.id}`, {
//     credentials: "include",
//   });

//   if (!response.ok) {
//     // throw new Error("Failed to fetch store details");
//     return null;
//   }

//   const data = await response.json();
//   console.log("Store details data:", data); // Debug log
//   return data;
// };

// export const fetchUpdateStore = async (
//   id: string,
//   name: string,
//   slug: string,
// ): Promise<Store> => {
//   const response = await fetch(`${API_URL}/stores/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include",
//     body: JSON.stringify({ name, slug }),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to update store");
//   }

//   const data = await response.json();
//   console.log("Updated store data:", data);
//   return data;
// };
