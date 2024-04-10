import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MENU } from "../constants";
import { Product } from "@/shared/types/types";

interface OrderState {
  cart: Record<number, Product & { count?: number }>;
}

const initialState: OrderState = { cart: {} };

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    add(state, action: PayloadAction<Product>) {
      if (state.cart[action.payload.id]) {
        const count = state.cart[action.payload.id].count ?? 1;
        state.cart[action.payload.id].count = count + 1;
      } else {
        const obj: Product & { count: number } = {
          count: 1,
          ...action.payload,
        };
        state.cart[action.payload.id] = obj;
      }
    },
    increment(state, action: PayloadAction<number>) {
      const count = state.cart[action.payload].count ?? 1;
      state.cart[action.payload].count = count + 1;
    },
    decrement(state, action: PayloadAction<number>) {
      const count = state.cart[action.payload].count ?? 1;
      if (count <= 1) {
        delete state.cart[action.payload];
      } else {
        state.cart[action.payload].count = count - 1;
      }
    },
    kick(state, action: PayloadAction<number>) {
      delete state.cart[action.payload];
    },
  },
});

export const orderReducer = orderSlice.reducer;
export const { add, increment, decrement, kick } = orderSlice.actions;
