import { takeLatest, call, all, put } from "typed-redux-saga/macro";

import {
  AdditionalInfo,
  createCustomUserFromAuth,
  getCurrentUser,
  signinUserWithGoogleEmailandPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import { emailSigninStart, signinFailed, signinSuccess } from "./user.action";
import { SET_ACTIONS_TYPE } from "./user.type";
import { User } from "firebase/auth";

export function* getSnapshotFromAuth(
  userAuth: User,
  additionalDetails?: AdditionalInfo) {
  try {
    const userSnapshot = yield* call(
      createCustomUserFromAuth,
      userAuth,
      additionalDetails
    );
    if(userSnapshot)
    yield* put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield* put(signinFailed(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromAuth, userAuth);
  } catch (error) {
    yield* put(signinFailed(error as Error));
  }
}

export function* signInWithEmail({ payload: { email, password } }: emailSigninStart) {
  try {
    const userCreditional = yield* call(signinUserWithGoogleEmailandPassword, email, password);
    if(userCreditional) {
      const { user } = userCreditional;
      yield* call(getSnapshotFromAuth, user);
    }
  } catch (error) {
    yield* put(signinFailed(error as Error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromAuth, user);
  } catch (error) {
    yield* put(signinFailed(error as Error));
  }
}

export function* onEmailSigninStart() {
  yield* takeLatest(SET_ACTIONS_TYPE.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onGoogleSigninStart() {
  yield* takeLatest(SET_ACTIONS_TYPE.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield* takeLatest(SET_ACTIONS_TYPE.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSigninStart),
    call(onEmailSigninStart),
  ]);
}