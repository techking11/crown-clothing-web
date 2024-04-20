import { createAction } from "../../utils/reducer/reducer.utils";
import { PRODUCT_ACTION_TYPE } from "./product.type";

export const setCategories = category =>
  createAction(PRODUCT_ACTION_TYPE.SET_PRODUCT_TYPE, category);