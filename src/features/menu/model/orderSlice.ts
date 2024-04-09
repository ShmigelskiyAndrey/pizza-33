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
  },
});

export const orderReducer = orderSlice.reducer;
export const { add } = orderSlice.actions;
