import { type FC } from "react";
import Layout from "../components/Layout";
import { Heading } from "@radix-ui/themes";
import Dashboard from "../components/Dashboard";
import ProductForm from "../components/ProductForm";

export const ProductEdit: FC = () => {
  return (
    <Layout>
      <Dashboard>
        <Heading mb="4">Product Edit</Heading>
        <ProductForm />
      </Dashboard>
    </Layout>
  );
};

export default ProductEdit;
