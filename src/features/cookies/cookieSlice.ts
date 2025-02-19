import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Cookie } from "../../models";

export interface CookieState {
  cookies: Cookie[];
}

const initialState: CookieState = {
  cookies: [
    {
      id: 1,
      name: "Chocolate Chip Deluxe",
      price: 5,
      flavor: "Chocolate Chip",
    },
  ],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCookie: (state, payload: PayloadAction<Cookie>) => {},
    removeCookie: (state, payload: PayloadAction<number>) => {},
    setCookies: (state, payload: PayloadAction<Cookie[]>) => {},
    updateCookie: (state, payload: PayloadAction<Cookie>) => {},
  },
});

export const { addCookie, removeCookie, setCookies } = counterSlice.actions;

export default counterSlice.reducer;
