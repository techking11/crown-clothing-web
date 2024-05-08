import { createSelector } from "reselect";
import { CurrentUserState } from "./user.reducer";


export const currentUserReducer = (state): CurrentUserState => state.user;

export const selectCurrentUser = createSelector(
  [currentUserReducer],
  (user) => user.currentUser
);