import { API_URL } from "../type/constants";
import type { Product } from "../../../../api/src/database/entity/product.entity";

export const fetchProductList = async (): Promise<Product[] | null> => {
  const response = await fetch(`${API_URL}/products`, {
    credentials: "include",
  });

  /** @todo Role based auth */
  if (!response.ok) {
    // throw new Error("Failed to fetch product list");
    return null;
  }

  const data = await response.json();
  console.log("Product list data:", data); // Debug log
  return data;
};

/** @todo use CreateProductDTO as argument */
export const fetchCreateProduct = async (
  title: string,
  storeId: string,
): Promise<Product> => {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ title, storeId, price: 0, slug: title.toLowerCase().replace(/\s+/g, "-") }), // Temporary slug generation
  });

  if (!response.ok) {
    throw new Error("Failed to create product");
  }

  const data = await response.json();
  console.log("Created product data:", data); // Debug log
  return data;
};

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
