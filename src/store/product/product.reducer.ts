import { AnyAction } from "redux";
import { Category } from "./product.type";

import {
  fetchCategoriesFailed,
  fetchCategoriesStart,
  fetchCategoriesSuccess
} from "./product.action";

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
}

export const PRODUCT_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const productReducer = (
  state = PRODUCT_INITIAL_STATE,
  action = {} as AnyAction ): CategoriesState => {
    
    const { type, payload } = action;

  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, categories: payload, isLoading: false };
  }

  if (fetchCategoriesFailed.match(action)) {
    return { ...state, error: payload, isLoading: false };
  }
  
  return state;

};
