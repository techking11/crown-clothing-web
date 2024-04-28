import { takeLatest, call, all, put } from "redux-saga/effects";
import { createCustomUserFromAuth, getCurrentUser } from "../../utils/firebase/firebase.utils";
import { signinFailed, signinSuccess } from "./user.action";
import { SET_ACTIONS_TYPE } from "./user.type";

export function* getSnapshotFromAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createCustomUserFromAuth,
      userAuth,
      additionalDetails
    );
    yield put(signinSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
  } catch (error) {
    yield put(signinFailed(error))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if(!userAuth) return;
    yield put(getSnapshotFromAuth, userAuth);
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