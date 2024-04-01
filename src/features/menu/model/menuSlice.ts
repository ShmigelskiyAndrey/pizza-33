import { createSlice } from "@reduxjs/toolkit";
import { MENU } from "../constants";

const menuSlice = createSlice({
  name: "menu",
  initialState: MENU,
  reducers: {
    devide(state) {
      return state.filter((_, index) => index % 2 !== 0);
    },
    adder(state, action) {
      state.push(action.payload);
    },
    pizza(state) {
      return state.filter((element) => element.ispizza === true);
    },
  },
});

export const menuReducer = menuSlice.reducer;
export const { devide, adder, pizza } = menuSlice.actions;
