/** @format */

import React, { lazy, Suspense, FunctionComponent } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Header } from "../components/header";
import { ThemedSuspense } from "../components/themedSuspense";
import routes from "../routes";

const Page404 = lazy(() => import("../pages/404"));

const Layout: FunctionComponent = () => {
  return (
    <div className={`flex h-screen bg-gray-50 dark `}>
      <div className="flex flex-col flex-1 w-full ">
        <Header />

        <main className="h-full bg-white overflow-y-auto">
          <div className="container grid px-6 mx-auto pt-6">
            <Suspense fallback={<ThemedSuspense />}>
              <Switch>
                {routes.map((route, i) => {
                  const { path, exact = true, component: Component } = route;

                  return Component ? (
                    <Route
                      key={i}
                      exact={exact}
                      path={`/app${path}`}
                      render={(props: any) => <Component {...props} />}
                    />
                  ) : null;
                })}
                <Redirect exact from="/app" to="/app/dashboard" />
                <Route component={Page404} />
              </Switch>
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
