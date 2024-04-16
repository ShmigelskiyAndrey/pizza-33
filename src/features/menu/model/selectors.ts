import { RootState } from "@/app/store";
import { createSelector } from "@reduxjs/toolkit";

const selectMenu = (state: RootState) => {
  return state.menuReducer;
};

const selectFilter = (state: RootState) => {
  return state.filterReducer;
};

const selectMenuItemsByFilter = createSelector(
  selectMenu,
  selectFilter,
  (menu, filter) => {
    if (filter) {
      return menu.filter((element) => element.category === filter);
    }
    return menu;
  }
);

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

const selectCountById = (id: number) => (state: RootState) => {
  return state.orderReducer.cart[id]?.count;
};

const selectChosenProduct = (id: number) => (state: RootState) => {
  return state.menuReducer.find((item) => item.id === id);
};

export {
  selectMenuItemsByFilter,
  selectOrderedProducts,
  selectIsCartNotEmpty,
  selectTotalPrice,
  selectCountById,
  selectChosenProduct,
};
