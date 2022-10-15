/** @format */
import { configureStore } from "@reduxjs/toolkit";

import * as Slices from "./slices";

export const Store = configureStore({
  reducer: {
    [Slices.Recipe.Slice.name]: Slices.Recipe.Slice.reducer,
  },
});

// @ts-ignore
export type RootState = ReturnType<typeof Store.getState>;
export type Dispatch = typeof Store.dispatch;

export { Slices };
