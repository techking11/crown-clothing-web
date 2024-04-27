import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./product/product.saga";

export function* rootSaga() {
  yield all([call(categoriesSaga)]);
}
