import { createAction } from "../../utils/reducer/reducer.utils";
import { SET_ACTIONS_TYPE } from "./user.type";

export const setCurrentUser = (user) =>
  createAction(SET_ACTIONS_TYPE.SET_USER_TYPE, user);

export const checkUserSession = () =>
  createAction(SET_ACTIONS_TYPE.CHECK_USER_SESSION);

export const googleSigninStart = () =>
  createAction(SET_ACTIONS_TYPE.GOOGLE_SIGN_IN_START);

export const emailSigninStart = (email, password) =>
  createAction(SET_ACTIONS_TYPE.EMAIL_SIGN_IN_START, { email, password });

export const signinSuccess = (user) =>
  createAction(SET_ACTIONS_TYPE.SIGNIN_SUCCESS, user);

export const signinFailed = (error) =>
  createAction(SET_ACTIONS_TYPE.SIGNIN_FAILED, error);
