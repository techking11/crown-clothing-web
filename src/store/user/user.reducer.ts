import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase.utils";
import { SET_ACTIONS_TYPE } from "./user.type";
import { signinFailed, signinSuccess, signOutFailed, signOutSuccess, signUpFailed } from "./user.action";

export type CurrentUserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
}

const USER_INITITAL_STATE: CurrentUserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = USER_INITITAL_STATE, action: AnyAction)
  : CurrentUserState => {
  const { type, payload } = action;

  if (signinSuccess.match(action))
    return { ...state, currentUser: payload };

  if (signOutSuccess.match(action))
    return { ...state, currentUser: null };

  if (
    signinFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  )
    return { ...state, error: payload };

  return state;
};