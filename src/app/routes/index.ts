/** @format */

import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));
const Recipe = lazy(() => import("../pages/recipe"));

const routes: Array<{
  path: string;
  component: any;
  exact?: boolean;
}> = [
  {
    path: "/recipe/:id",
    component: Recipe,
  },
  {
    path: "",
    component: Home,
  },
];

export default routes;
