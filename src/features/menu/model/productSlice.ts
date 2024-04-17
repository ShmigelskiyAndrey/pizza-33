import { fetchProductByIdApi } from "@/shared/api/productApi";
import { Product } from "@/shared/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const fetchProductById = createAsyncThunk(
  `product/fetchProductsById`,
  async (id: number | string) => {
    const response = await fetchProductByIdApi(id);
    return response.data;
  }
);

interface State {
  data: Product | null;
  status: "fulfilled" | "pending" | "rejected" | null;
}

const initialState: State = {
  data: null,
  status: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductById.pending, (state) => ({
      ...state,
      status: "pending",
    }));
    builder.addCase(fetchProductById.fulfilled, (state, action) => ({
      ...state,
      status: "fulfilled",
      data: action.payload,
    }));
    builder.addCase(fetchProductById.rejected, (state) => ({
      ...state,
      status: "rejected",
    }));
  },
});

export const productReducer = productSlice.reducer;
export { fetchProductById };
