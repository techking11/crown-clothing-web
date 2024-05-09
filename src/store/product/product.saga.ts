
import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import { PRODUCT_ACTION_TYPE } from "./product.type";
import { getCategoriesWithCollection } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "./product.action";

export function* fetchCategoriesAsync() {
  try {
    const categoriesMap = yield* call(getCategoriesWithCollection);
    yield* put(fetchCategoriesSuccess(categoriesMap));
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}

export function* onFetchCategories() {
  yield* takeLatest(PRODUCT_ACTION_TYPE.SET_PRODUCT_START, fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}
