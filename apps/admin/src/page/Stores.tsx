import { type FC, useState } from "react";
import Layout from "../components/Layout";
import { Button, Flex, Heading, Table } from "@radix-ui/themes";
import { useLoaderData, useNavigate, useRevalidator } from "react-router-dom";
import type { Store } from "../../../api/src/database/entity/store.entity";
import Dashboard from "../components/Dashboard";
import { fetchDeleteStore } from "../data/query/store.query";

const Stores: FC = () => {
  const navigate = useNavigate();
  const revalidator = useRevalidator();
  const storeList: Store[] = useLoaderData();
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const handleDelete = async (store: Store) => {
    if (
      !window.confirm(`Delete "${store.name}"? This action cannot be undone.`)
    ) {
      return;
    }

    setDeleteError(null);
    try {
      await fetchDeleteStore(store.id);
      revalidator.revalidate();
    } catch (error) {
      setDeleteError(
        error instanceof Error ? error.message : "Failed to delete store",
      );
    } finally {
    }
  };

  return (
    <Layout>
      <Dashboard>
        <Heading mb="4">Store List</Heading>
        {deleteError && (
          <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md">
            {deleteError}
          </div>
        )}

        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Slug</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {storeList.map((item) => (
              <Table.Row key={item.id} align="center">
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.slug}</Table.Cell>
                <Table.Cell>{item.id}</Table.Cell>
                <Table.Cell>
                  <Button
                    variant="ghost"
                    color="blue"
                    onClick={() => navigate(`/store/${item.id}/edit`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="ghost"
                    color="red"
                    onClick={() => handleDelete(item)}
                    ml="3"
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
        <Flex align="center" gap="3" mt="4">
          <Button variant="classic" onClick={() => navigate("/store/add")}>
            Add Store
          </Button>
        </Flex>
      </Dashboard>
    </Layout>
  );
};

export default Stores;
