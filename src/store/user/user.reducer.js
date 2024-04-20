import { SET_ACTIONS_TYPE } from "./user.type";

const USER_INITITAL_STATE = {
  currentUser: null
};

export const userReducer = (state = USER_INITITAL_STATE, action = {}) => {
  const { type, payload } = action;
  
  switch (type) {
    case SET_ACTIONS_TYPE.SET_USER_TYPE:
      return {
        ...state,
        currentUser: payload
      }
    default:
      return state;
  }
}