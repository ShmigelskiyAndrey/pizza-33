import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MENU } from "../constants";
import { fetchProductsApi } from "@/shared/api/productApi";
import { Product } from "@/shared/types/types";

const fetchProducts = createAsyncThunk(`menu/fetchProducts`, async () => {
  const response = await fetchProductsApi();
  return response.data;
});

interface State {
  data: Product[] | null;
  status: "fulfilled" | "pending" | "rejected" | null;
}

const initialState: State = {
  data: null,
  status: null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => ({
      ...state,
      status: "pending",
    }));
    builder.addCase(fetchProducts.fulfilled, (state, action) => ({
      ...state,
      status: "fulfilled",
      data: action.payload,
    }));
    builder.addCase(fetchProducts.rejected, (state) => ({
      ...state,
      status: "rejected",
    }));
  },
});

export const menuReducer = menuSlice.reducer;
export { fetchProducts };
