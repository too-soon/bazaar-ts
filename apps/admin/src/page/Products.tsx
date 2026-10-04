import { type FC } from "react";
import Layout from "../components/Layout";
import { Button, Flex, Heading, Table } from "@radix-ui/themes";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import type { Product } from "../../../api/src/database/entity/product.entity";

const Products: FC = () => {
  const navigate = useNavigate();
  const productList: Product[] = useLoaderData();
  return (
    <Layout>
      <Dashboard>
        <Heading mb="4">Product List</Heading>

        <Table.Root variant="surface">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Store</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {productList.map((item) => (
              <Table.Row key={item.id} align="center">
                <Table.Cell>{item.title}</Table.Cell>
                <Table.Cell>{item.store?.id || "N/A"}</Table.Cell>
                <Table.Cell>
                  <Link to={`/product/${item.id}/edit`}>Edit</Link>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
        <Flex align="center" gap="3" mt="4">
          <Button variant="classic" onClick={() => navigate("/product/add")}>
            Add Product
          </Button>
        </Flex>
      </Dashboard>
    </Layout>
  );
};

export default Products;
