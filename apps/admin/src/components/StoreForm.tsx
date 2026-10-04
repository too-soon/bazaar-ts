"use client";

import { Box, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useActionState } from "react";
import { fetchCreateStore } from "../data/query/store.query";
import { useLoaderData } from "react-router-dom";

// Mock submission action
async function submitFormData(previousState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const slug = formData.get("slug") as string;

  if (!name || !slug) {
    return {
      success: false,
      error: "Name and Slug are required",
      values: { name, slug },
    };
  }

  await fetchCreateStore(name, slug);

  return { success: true, error: null, values: { name, slug } };
}

export default function StoreForm() {
  const store = useLoaderData() || { name: "", slug: "" };
  const [state, formAction, isPending] = useActionState(submitFormData, {
    success: false,
    error: null,
    values: { name: store.name || "", slug: store.slug || "" },
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
          <Text as="label" htmlFor="name" size="2" weight="bold">
            Name
          </Text>
        </Flex>
        <TextField.Root
          tabIndex={0}
          placeholder="Name"
          id="name"
          name="name"
          defaultValue={state.values?.name || ""}
        />
        <Flex mb="1">
          <Text as="label" htmlFor="slug" size="2" weight="bold">
            Slug
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
