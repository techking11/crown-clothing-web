import { createAction } from "../../utils/reducer/reducer.utils";
import { SET_ACTIONS_TYPE } from "./user.type";

export const setCurrentUser = user =>
  createAction(SET_ACTIONS_TYPE.SET_USER_TYPE, user);