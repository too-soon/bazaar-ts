"use client";

import { Box, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useActionState } from "react";
import { useLoaderData } from "react-router-dom";
import { apiCall } from "../data/query/client.query";
import type { Product } from "@api";

interface FormState {
  success: boolean;
  message: string | null;
  values: Record<string, string>;
  validationErrors: Record<string, string[]> | null;
}

async function submitFormData(
  previousState: unknown,
  formData: FormData,
): Promise<FormState> {
  const data = Object.fromEntries(formData.entries());
  console.log("Form Data Submitted:", data); // Debug log @TODO: remove

  // await fetchCreateProduct(title, storeId);
  const result = await apiCall<Product>({
    method: "POST",
    path: "products",
    body: data,
  });

  return {
    success: result.success,
    message: result.success
      ? "Resource created successfully!"
      : "Failed to create resource.",
    values: result.success ? result.data : data,
    validationErrors: result.success ? null : result.data,
  };
}

export default function ProductForm() {
  const product = useLoaderData() || { title: "", storeId: "" };
  const [state, formAction, isPending] = useActionState(submitFormData, {
    success: false,
    message: null,
    values: product,
    validationErrors: null,
  });

  return (
    <form
      action={formAction}
      className=" mx-auto p-6 space-y-4 rounded shadow-md bg-white"
    >
      {state.message && (
        <div
          className={`p-3 text-sm text-red-600 ${state.success ? "bg-green-50" : "bg-red-50"} rounded-md`}
        >
          {state.message}
        </div>
      )}
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
        <Flex mb="1">
          <Text as="label" htmlFor="storeId" size="2" weight="bold">
            Store ID
          </Text>
        </Flex>
        <TextField.Root
          tabIndex={1}
          placeholder="Slug"
          id="slug"
          name="slug"
          defaultValue={state.values?.slug || ""}
        />
      </Box>
      <Button type="submit" disabled={isPending} className="" variant="classic">
        {isPending ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
