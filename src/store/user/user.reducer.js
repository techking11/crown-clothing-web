import { createSlice } from "@reduxjs/toolkit";

const USER_INITITAL_STATE = {
  currentUser: null,
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

export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
