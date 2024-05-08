import { createSelector } from "reselect";
import { CategoriesState } from "./product.reducer";
import { CategoryMap } from "./product.type";
import { RootState } from "../store";

const selectProductReducer = (state: RootState): CategoriesState => state.product;

export const selectProducts = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice.categories
);

export const selectProductsMap = createSelector(
  [selectProducts],
  (products): CategoryMap => products.reduce((acc, products) => {
    const { title, items } = products;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {} as CategoryMap)
);

export const selectProductIsLoading = createSelector(
  [selectProductReducer],
  (productSlide) => productSlide.isLoading
);
