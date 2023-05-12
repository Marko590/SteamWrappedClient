import React from "react";
import ReactDOM from "react-dom/client";
import UserLookup from "./UserLookup.tsx";

import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./components/Landing.tsx";

const router = createBrowserRouter([
  { path: "/user/:steamId", element: <UserLookup /> },
  { path: "/", element: <Landing /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
