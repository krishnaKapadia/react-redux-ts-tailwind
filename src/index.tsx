/** @format */

import ReactDOM from "react-dom";
import React, { Suspense } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";

import { ThemedSuspense } from "./app/components/themedSuspense";
import { Store } from "./app/store";
import App from "./App";

import "./app/assets/css/global.css";
import "./app/assets/css/tailwind.output.css";

import { SidebarProvider } from "./app/context";

const queryClient = new QueryClient();

ReactDOM.render(
  <ReduxProvider store={Store}>
    <SidebarProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<ThemedSuspense />}>
          <App />
        </Suspense>
      </QueryClientProvider>
    </SidebarProvider>
  </ReduxProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
