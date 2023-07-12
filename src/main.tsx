import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { Start } from "./Start";
import { User } from "./User";
import { Play } from "./Play";
import { Result } from "./Result";
import { AboutUs } from "./AboutUs";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/start",
    element: (
      <Layout>
        <Start />
      </Layout>
    ),
  },
  {
    path: "/user",
    element: (
      <Layout>
        <User />
      </Layout>
    ),
  },
  {
    path: "/user/:userNumber",
    element: (
      <Layout>
        <User />
      </Layout>
    ),
  },
  {
    path: "/user/:userNumber/movie/:movieNumber",
    element: (
      <Layout>
        <Play />
      </Layout>
    ),
  },
  {
    path: "/result",
    element: (
      <Layout>
        <Result />
      </Layout>
    ),
  },
  {
    path: "/aboutus",
    element: (
      <Layout>
        <AboutUs />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
