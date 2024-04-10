import { RootState } from "@/app/store";
import { createSelector } from "@reduxjs/toolkit";

const selectMenuItemsByFilter = (state: RootState) => {
  if (state.filterReducer) {
    return state.menuReducer.filter(
      (element) => element.category === state.filterReducer
    );
  }
  return state.menuReducer;
};

const selectCartObject = (state: RootState) => state.orderReducer.cart;

const selectOrderedProducts = createSelector(selectCartObject, (cartObject) => {
  return Object.values(cartObject);
});

const selectIsCartNotEmpty = (state: RootState) => {
  return Object.values(state.orderReducer.cart).length > 0;
};

const selectTotalPrice = (state: RootState) => {
  return Object.values(state.orderReducer.cart).reduce(
    (accumulator, item) =>
      accumulator +
      item.price * (typeof item.count !== "undefined" ? item.count : 1),
    0
  );
};

export {
  selectMenuItemsByFilter,
  selectOrderedProducts,
  selectIsCartNotEmpty,
  selectTotalPrice,
};
