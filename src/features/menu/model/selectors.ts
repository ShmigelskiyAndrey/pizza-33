import { RootState } from "@/app/store";

const selectMenuItemsByFilter = (state: RootState) => {
  if (state.filterReducer) {
    return state.menuReducer.filter(
      (element) => element.category === state.filterReducer
    );
  }
  return state.menuReducer;
};

const selectOrderedProducts = (state: RootState) => {
  return Object.values(state.orderReducer.cart);
};

export { selectMenuItemsByFilter, selectOrderedProducts };
