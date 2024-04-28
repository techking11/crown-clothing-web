import { SET_ACTIONS_TYPE } from "./user.type";

const USER_INITITAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = USER_INITITAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    // case SET_ACTIONS_TYPE.SET_USER_TYPE:
    //   return {
    //     ...state,
    //     currentUser: payload
    //   }
    case SET_ACTIONS_TYPE.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload };
    case SET_ACTIONS_TYPE.SIGN_IN_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};
