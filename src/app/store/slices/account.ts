/** @format */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import * as Models from "../../../models";

export type AccountState = {
  accounts: Models.Account[];
};

const initialState: AccountState = {
  accounts: [],
};

export const AccountSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    setAccounts: (state, action: PayloadAction<Models.Account[]>) => {
      state.accounts = action.payload;
    },
  },
});
