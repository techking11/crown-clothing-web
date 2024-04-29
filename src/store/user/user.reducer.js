import { createSlice } from "@reduxjs/toolkit";
import { SET_ACTIONS_TYPE } from "./user.type";

const USER_INITITAL_STATE = {
  currentUser: null,
  // isLoading: false,
  // error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: USER_INITITAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    }
  }
});

export const userReducerOld = (state = USER_INITITAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    // case SET_ACTIONS_TYPE.SET_USER_TYPE:
    //   return {
    //     ...state,
    //     currentUser: payload
    //   }
    case SET_ACTIONS_TYPE.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload };
      
    case SET_ACTIONS_TYPE.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };
      
    case SET_ACTIONS_TYPE.SIGN_IN_FAILED ||
      SET_ACTIONS_TYPE.SIGN_IN_FAILED ||
      SET_ACTIONS_TYPE.SIGN_UP_FAILED:
      return { ...state, error: payload };
      
    default:
      return state;
  }
};

export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
