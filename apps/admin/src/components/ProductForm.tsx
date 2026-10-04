"use client";

import { Box, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useActionState } from "react";
import { useLoaderData } from "react-router-dom";
import { fetchCreateProduct } from "../data/query/product.query";

// Mock submission action
async function submitFormData(previousState: any, formData: FormData) {
  const title = formData.get("title") as string;
  const storeId = formData.get("storeId") as string;

  if (!title || !storeId) {
    return {
      success: false,
      error: "Title and Store ID are required",
      values: { title, storeId },
    };
  }

  await fetchCreateProduct(title, storeId);

  return { success: true, error: null, values: { title, storeId } };
}

export default function ProductForm() {
  const product = useLoaderData() || { title: "", storeId: "" };
  const [state, formAction, isPending] = useActionState(submitFormData, {
    success: false,
    error: null,
    values: { title: product.title || "", storeId: product.storeId || "" },
  });

  return (
    <form
      action={formAction}
      className=" mx-auto p-6 space-y-4 rounded shadow-md bg-white"
    >
      {state.error && (
        <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md">
          {state.error}
        </div>
      )}
      {state.success && (
        <div className="p-3 text-sm text-green-600 bg-green-50 rounded-md">
          Form submitted successfully!
        </div>
      )}

      {/* <div className="flex flex-col space-y-2">
        <Label.Root
          className="text-sm font-medium text-gray-700"
          htmlFor="name"
        >
          Name
        </Label.Root>
        <input
          id="name"
          name="name"
          type="text"
          defaultValue={state.values?.name || ""}
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          placeholder="e.g., My Resource"
        />
      </div> */}
      <Box mb="5">
        <Flex mb="1">
          <Text as="label" htmlFor="title" size="2" weight="bold">
            Title
          </Text>
        </Flex>
        <TextField.Root
          tabIndex={0}
          placeholder="Title"
          id="title"
          name="title"
          defaultValue={state.values?.title || ""}
        />
        <Flex mb="1">
          <Text as="label" htmlFor="storeId" size="2" weight="bold">
            Store ID
          </Text>
        </Flex>
        <TextField.Root
          tabIndex={1}
          placeholder="Store ID"
          id="storeId"
          name="storeId"
          defaultValue={state.values?.storeId || ""}
        />
      </Box>

      {/* <div className="flex flex-col space-y-2">
        <Label.Root
          className="text-sm font-medium text-gray-700"
          htmlFor="slug"
        >
          Slug
        </Label.Root>
        <input
          id="slug"
          name="slug"
          type="text"
          defaultValue={state.values?.slug || ""}
          className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
          placeholder="e.g., my-resource"
        />
      </div> */}

      <Button type="submit" disabled={isPending} className="" variant="classic">
        {isPending ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
