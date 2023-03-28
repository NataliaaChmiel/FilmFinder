import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./sass/main.scss";
import "./sass/media.scss";
import "./sass/layout.scss";
import "./sass/colors.scss";
import "./sass/home.scss";
import "./sass/start.scss";
import "./sass/play.scss";
import "./sass/result.scss";
import "./sass/aboutus.scss";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { Start } from "./Start";
import { Play } from "./Play";
import { Result } from "./Result";
import { AboutUs } from "./AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/start",
    element: <Layout><Start /></Layout>,
  },
  {
    path: "/play",
    element: <Layout><Play /></Layout>,
  },
  {
    path: "/result",
    element: <Layout><Result /></Layout>,
  },
  {
  path: "/aboutus",
  element: <Layout><AboutUs /></Layout>,
}
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
