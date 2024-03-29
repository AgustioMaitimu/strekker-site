import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./pages/App.jsx";
import Inventory from "./pages/Inventory.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/strekker-site/",
    element: <App />,
  },
  {
    path: "/strekker-site/inventory",
    element: <Inventory />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
