import { createSelector } from "reselect";
import { CurrentUserState } from "./user.reducer";
import { RootState } from "../store";


export const currentUserReducer = (state: RootState): CurrentUserState => state.user;

export const selectCurrentUser = createSelector(
  [currentUserReducer],
  (user) => user.currentUser
);