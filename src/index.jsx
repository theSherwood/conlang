import "windi.css";

import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router } from "solid-app-router";

import App from "./layout/default";

const routes = [
  {
    path: "/",
    component: lazy(() => import("./pages/index.jsx"))
  },
  {
    path: "/about",
    component: lazy(() => import("./pages/about.jsx"))
  },
  {
    path: "*all",
    component: lazy(() => import("./pages/error.jsx"))
  }
];

render(
  () => (
    <Router routes={routes}>
      <App />
    </Router>
  ),
  document.getElementById("root")
);
