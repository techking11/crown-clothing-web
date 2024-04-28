import { takeLatest, call, all, put } from "redux-saga/effects";
import { getCurrentUser } from "../../utils/firebase/firebase.utils";
import { signinFailed, signinSuccess } from "./user.action";
import { SET_ACTIONS_TYPE } from "./user.type";

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if(!userAuth) return;
    yield put(signinSuccess(userAuth));
  } catch (error) {
    yield put(signinFailed(error))
  }
}

export function* onCheckUserSession() {
  yield takeLatest(SET_ACTIONS_TYPE.CHECK_USER_SESSION);
}

export function* userSaga() {
  yield all([call(onCheckUserSession)]);
}