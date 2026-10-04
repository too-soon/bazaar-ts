import { type FC } from "react";
import Layout from "../components/Layout";
import { Heading } from "@radix-ui/themes";
import StoreForm from "../components/StoreForm";
import Dashboard from "../components/Dashboard";

export const StoreEdit: FC = () => {
  return (
    <Layout>
      <Dashboard>
        <Heading mb="4">Store Edit</Heading>
        <StoreForm />
      </Dashboard>
    </Layout>
  );
};

export default StoreEdit;
