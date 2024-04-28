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
  
export const signUpStart = (email, password, displayName) =>
  createAction(SET_ACTIONS_TYPE.SING_UP_START, {email, password, displayName});
  
export const signUpSuccess = (user, additionalDetails) =>
  createAction(SET_ACTIONS_TYPE.SIGN_UP_SUCCESS, {user, additionalDetails});
  
export const signUpFailed = (error) =>
  createAction(SET_ACTIONS_TYPE.SIGN_UP_FAILED, error);