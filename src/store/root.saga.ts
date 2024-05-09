import { all, call } from "typed-redux-saga/macro";
import { categoriesSaga } from "./product/product.saga";

export function* rootSaga() {
  yield* all([call(categoriesSaga)]);
}