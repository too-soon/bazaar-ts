import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/base.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthSuccess from "./pages/AuthSuccess.tsx";
import Home from "./pages/Home.tsx";
import { Logout } from "./pages/Logout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth-success" element={<AuthSuccess />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
