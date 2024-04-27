// import { getCategoriesWithCollection } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";
import { PRODUCT_ACTION_TYPE } from "./product.type";

export const setCategories = category =>
  createAction(PRODUCT_ACTION_TYPE.SET_PRODUCT_TYPE, category);
  
export const fetchCategoriesStart = () =>
  createAction(PRODUCT_ACTION_TYPE.SET_PRODUCT_START);
  
export const fetchCategoriesSuccess = (categories) =>
  createAction(PRODUCT_ACTION_TYPE.SET_PRODUCT_SUCCESS, categories);
  
export const fetchCategoriesFailed = (error) => 
  createAction(PRODUCT_ACTION_TYPE.SET_PRODUCT_FAILED, error);
  
// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart());
  
//   try {
//     const categoriesMap = await getCategoriesWithCollection();
//     dispatch(fetchCategoriesSuccess(categoriesMap));
//   } catch (error) {
//     dispatch(fetchCategoriesFailed(error));
//   }
// }