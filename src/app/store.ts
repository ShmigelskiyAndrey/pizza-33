import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "@/features/menu/model/menuSlice";
import { filterReducer } from "@/features/menu/model/filterSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { menuReducer, filterReducer },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];