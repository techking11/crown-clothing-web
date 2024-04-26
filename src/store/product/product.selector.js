import { createSelector } from "reselect";

export const selectProducts = (state) =>
  state.product.categories;
  
  // .reduce((acc, products) => {
  //   const { title, items } = products;
  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {});
  
const selectProductReducer = (state) => state.product;

export const selectProductIsLoading = createSelector(
  [selectProductReducer],
  (productSlide) => productSlide.isLoading,
);