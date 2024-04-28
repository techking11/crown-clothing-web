import { takeLatest, call, all, put } from "redux-saga/effects";
import {
  createCustomUserFromAuth,
  createUserWithGoogleEmailandPassword,
  getCurrentUser,
  signinUserWithGoogleEmailandPassword,
  signInWithGooglePopup,
  signOutUser,
} from "../../utils/firebase/firebase.utils";
import {
  signinFailed,
  signinSuccess,
  signOutFailed,
  signOutSuccess,
  signUpFailed,
  signUpSuccess,
} from "./user.action";
import { SET_ACTIONS_TYPE } from "./user.type";

export function* getSnapshotFromAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createCustomUserFromAuth,
      userAuth,
      additionalDetails
    );
    yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signinFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromAuth, userAuth);
  } catch (error) {
    yield call(signinFailed(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(signinUserWithGoogleEmailandPassword, email, password);
    yield call(getSnapshotFromAuth, user);
  } catch (error) {
    yield put(signinFailed(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromAuth, user);
  } catch (error) {
    yield put(signinFailed(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createUserWithGoogleEmailandPassword,
      email,
      password
    );
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* signinAfterSignup({ payload: { user, additionalDetails } }) {
  yield call(getSnapshotFromAuth, user, additionalDetails);
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

export function* onEmailSigninStart() {
  yield takeLatest(SET_ACTIONS_TYPE.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onGoogleSigninStart() {
  yield takeLatest(SET_ACTIONS_TYPE.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield takeLatest(SET_ACTIONS_TYPE.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignupStart() {
  yield takeLatest(SET_ACTIONS_TYPE.SING_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(SET_ACTIONS_TYPE.SIGN_UP_SUCCESS, signinAfterSignup);
}

export function* onSignOutStart() {
  yield takeLatest(SET_ACTIONS_TYPE.SIGN_OUT_START, signOut);
}

export function* userSaga() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSigninStart),
    call(onEmailSigninStart),
    call(onSignupStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
