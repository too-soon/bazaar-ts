import { type FC } from "react";
import Layout from "../components/Layout";
import { Button, Flex, Heading, Table } from "@radix-ui/themes";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import type { Store } from "../../../api/src/database/entity/store.entity";
import Dashboard from "../components/Dashboard";

const Stores: FC = () => {
  const navigate = useNavigate();
  const storeList: Store[] = useLoaderData();
  return (
    <Layout>
      <Dashboard>
        <Heading mb="4">Store List</Heading>

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
                  <Link to={`/store/${item.id}/edit`}>Edit</Link>
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
