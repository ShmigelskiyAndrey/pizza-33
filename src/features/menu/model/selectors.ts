import { RootState } from "@/app/store";

const selectMenuItemsByFilter = (state: RootState) => {
  if (state.filterReducer) {
    return state.menuReducer.filter(
      (element) => element.category === state.filterReducer
    );
  }
  return state.menuReducer;
};

export { selectMenuItemsByFilter };
