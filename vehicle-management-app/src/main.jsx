import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import Container from "react-bootstrap/Container";
import AddCarDetail from "./AddCarDetail";
import ViewCarDetail from "./ViewCarDetail";
import { Link } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/AddCarDetail/",
    element: <AddCarDetail />,
  },
  {
    path: "/EditCarDetails/:cardId",
    element: <ViewCarDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <>
      <Container>
        <Menu></Menu>
        <RouterProvider router={router}></RouterProvider>
      </Container>
    </>
  </React.StrictMode>
);
