/** @format */

import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/dashboard"));

const routes: Array<{
  path: string;
  component: any;
  exact?: boolean;
}> = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
];

export default routes;
