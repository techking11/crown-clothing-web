import {
  AdditionalInfo,
  UserData
} from "../../utils/firebase/firebase.utils";

import {
  Action,
  ActionWithPayload,
  createAction,
  withMatchable
} from "../../utils/reducer/reducer.utils";

import { SET_ACTIONS_TYPE } from "./user.type";

export type setCurrentUser = ActionWithPayload<SET_ACTIONS_TYPE.SET_USER_TYPE, UserData>;
export const setCurrentUser = withMatchable(
  (user: UserData): setCurrentUser =>
    createAction(SET_ACTIONS_TYPE.SET_USER_TYPE, user)
);

export type checkUserSession = Action<SET_ACTIONS_TYPE.CHECK_USER_SESSION>;
export const checkUserSession = withMatchable(
  (): checkUserSession =>
    createAction(SET_ACTIONS_TYPE.CHECK_USER_SESSION)
);

export type googleSigninStart = Action<SET_ACTIONS_TYPE.GOOGLE_SIGN_IN_START>;
export const googleSigninStart = withMatchable(
  (): googleSigninStart =>
    createAction(SET_ACTIONS_TYPE.GOOGLE_SIGN_IN_START)
);

export type emailSigninStart = ActionWithPayload<
  SET_ACTIONS_TYPE.EMAIL_SIGN_IN_START, {
    email: string, password: string
  }>;
export const emailSigninStart = withMatchable(
  (email: string, password: string): emailSigninStart =>
    createAction(
      SET_ACTIONS_TYPE.EMAIL_SIGN_IN_START, {
      email,
      password
    })
);

export type signinSuccess = ActionWithPayload<SET_ACTIONS_TYPE.SIGN_IN_SUCCESS, UserData>;
export const signinSuccess = withMatchable(
  (user: UserData): signinSuccess =>
    createAction(SET_ACTIONS_TYPE.SIGN_IN_SUCCESS, user)
);

export type signinFailed = ActionWithPayload<SET_ACTIONS_TYPE.SIGN_IN_FAILED, Error>;
export const signinFailed = withMatchable(
  (error: Error): signinFailed =>
    createAction(SET_ACTIONS_TYPE.SIGN_IN_FAILED, error)
);

export type signUpStart = ActionWithPayload<SET_ACTIONS_TYPE.SIGN_UP_START, {
  email: string,
  password: string,
  displayName: string
}>
export const signUpStart = withMatchable(
  (email: string, password: string, displayName: string): signUpStart =>
    createAction(SET_ACTIONS_TYPE.SIGN_UP_START, {
      email,
      password,
      displayName,
    })
);

export type signUpSuccess = ActionWithPayload<SET_ACTIONS_TYPE.SIGN_UP_SUCCESS, {
  user: UserData,
  additionalDetails: AdditionalInfo
}>;
export const signUpSuccess = withMatchable((
  user: UserData,
  additionalDetails: AdditionalInfo
): signUpSuccess =>
  createAction(SET_ACTIONS_TYPE.SIGN_UP_SUCCESS, {
    user,
    additionalDetails
  })
);

export type signUpFailed = ActionWithPayload<SET_ACTIONS_TYPE.SIGN_UP_FAILED, Error>;
export const signUpFailed = withMatchable(
  (error: Error): signUpFailed =>
    createAction(SET_ACTIONS_TYPE.SIGN_UP_FAILED, error)
);

export type signOutStart = Action<SET_ACTIONS_TYPE.SIGN_OUT_START>;
export const signOutStart = withMatchable(
  (): signOutStart => createAction(SET_ACTIONS_TYPE.SIGN_OUT_START)
);

export type signOutSuccess = Action<SET_ACTIONS_TYPE.SIGN_OUT_SUCCESS>;
export const signOutSuccess = withMatchable(
  (): signOutSuccess =>
    createAction(SET_ACTIONS_TYPE.SIGN_OUT_SUCCESS)
);

export type signOutFailed = Action<SET_ACTIONS_TYPE.SIGN_OUT_FAILED>;
export const signOutFailed = withMatchable(
  (): signOutFailed =>
    createAction(SET_ACTIONS_TYPE.SIGN_OUT_FAILED)
);