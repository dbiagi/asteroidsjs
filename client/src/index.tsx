import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./styles/main.css";
import { RouterProvider } from "react-router";
import router from "@app/ui/routes.tsx";

const rootEl = document.getElementById("root");

createRoot(rootEl!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
