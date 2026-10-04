import { createRoot } from "react-dom/client";
import "./assets/base.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./page/Login.tsx";
import { Logout } from "./page/Logout.tsx";
import { authMiddleware, logoutMiddleware } from "./data/middleware/auth.ts";
import "@radix-ui/themes/styles.css";
import Stores from "./page/Stores.tsx";
import StoreEdit from "./page/StoreEdit.tsx";
import { fetchStoreDetails, fetchStoreList } from "./data/query/store.query.ts";
import Products from "./page/Products.tsx";
import { fetchProductList } from "./data/query/product.query.ts";
import ProductEdit from "./page/ProductEdit.tsx";

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "logout",
    element: <Logout />,
    middleware: [logoutMiddleware],
  },
  {
    path: "/",
    element: <Stores />,
    loader: fetchStoreList,
    middleware: [authMiddleware],
  },
  {
    path: "/store/add",
    element: <StoreEdit />,
    middleware: [authMiddleware],
  },
  {
    path: "/store/:id/edit",
    element: <StoreEdit />,
    loader: fetchStoreDetails,
    middleware: [authMiddleware],
  },
  {
    path: "/products",
    element: <Products />,
    loader: fetchProductList,
    middleware: [authMiddleware],
  },
  {
    path: "/product/add",
    element: <ProductEdit />,
    middleware: [authMiddleware],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);
