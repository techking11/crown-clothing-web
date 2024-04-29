import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  categories: {},
};

export const productSlice = createSlice({
  name: "category",
  initialState: INITIAL_STATE,
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    }
  },
});

export const { setCategories } = productSlice.actions;
export const productReducer = productSlice.reducer;
