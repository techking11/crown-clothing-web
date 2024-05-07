import { createAction, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";
import { PRODUCT_ACTION_TYPE, Category } from "./product.type";

export type fetchCategoriesStart = Action<PRODUCT_ACTION_TYPE.SET_PRODUCT_START>;

export type fetchCategoriesSuccess = ActionWithPayload<PRODUCT_ACTION_TYPE.SET_PRODUCT_SUCCESS, Category[]>;

export type fetchCategoriesFailed = ActionWithPayload<PRODUCT_ACTION_TYPE.SET_PRODUCT_FAILED, Error>;
  
export const fetchCategoriesStart = (): fetchCategoriesStart =>
  createAction(PRODUCT_ACTION_TYPE.SET_PRODUCT_START);
  
export const fetchCategoriesSuccess = (categories: Category[]): fetchCategoriesSuccess =>
  createAction(PRODUCT_ACTION_TYPE.SET_PRODUCT_SUCCESS, categories);
  
export const fetchCategoriesFailed = (error: Error): fetchCategoriesFailed => 
  createAction(PRODUCT_ACTION_TYPE.SET_PRODUCT_FAILED, error);
  
export type CreateAction = fetchCategoriesStart | fetchCategoriesSuccess | fetchCategoriesFailed;