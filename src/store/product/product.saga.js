import { takeLatest, all, call, put } from "redux-saga/effects";
import { PRODUCT_ACTION_TYPE } from "./product.type";
import { getCategoriesWithCollection } from "../../utils/firebase/firebase.utils";
import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "./product.action";

export function* fetchCategoriesAsync() {
  try {
    const categoriesMap = yield call(getCategoriesWithCollection, 'categories');
    yield put(fetchCategoriesSuccess(categoriesMap));
  } catch (error) {
    yield put(fetchCategoriesFailed(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(PRODUCT_ACTION_TYPE.SET_PRODUCT_START, fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
