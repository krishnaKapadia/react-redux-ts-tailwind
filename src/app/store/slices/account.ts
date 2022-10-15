/** @format */
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { find } from "lodash";

import * as Models from "../../../models";
import { RootState } from "../index";

export type AccountState = {
  recipies: Models.Recipe[];
};

const initialState: AccountState = {
  recipies: [],
};

const Slice = createSlice({
  name: "recipies",
  initialState,
  reducers: {
    setRecipes: (state, action: PayloadAction<Models.Recipe[]>) => {
      state.recipies = action.payload;
    },
  },
});

const recipeState = (state: RootState) => state.recipies;
const getRecipe = (state: RootState, id: string) =>
  createSelector(recipeState, (state) => find(state.recipies, { id }))(state);

const Selectors = {
  getRecipe,
};

export const Recipe = {
  Slice,
  Selectors,
};
