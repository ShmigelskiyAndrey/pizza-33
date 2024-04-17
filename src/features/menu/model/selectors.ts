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
      return menu.data?.filter((element) => element.category === filter);
    }
    return menu.data;
  }
);

const selectCartObject = (state: RootState) => state.persistedReducer.cart;

const selectOrderedProducts = createSelector(selectCartObject, (cartObject) => {
  return Object.values(cartObject);
});

const selectIsCartNotEmpty = (state: RootState) => {
  return Object.values(state.persistedReducer.cart).length > 0;
};

const selectTotalPrice = (state: RootState) => {
  return Object.values(state.persistedReducer.cart).reduce(
    (accumulator, item) =>
      accumulator +
      item.price * (typeof item.count !== "undefined" ? item.count : 1),
    0
  );
};

const selectCountById = (id: number) => (state: RootState) => {
  return state.persistedReducer.cart[id]?.count;
};

const selectChosenProduct = (state: RootState) => {
  return state.productReducer.data;
};

export {
  selectMenuItemsByFilter,
  selectOrderedProducts,
  selectIsCartNotEmpty,
  selectTotalPrice,
  selectCountById,
  selectChosenProduct,
  selectFilter,
};
