import { createAction } from "../../utils/reducer/reducer.utils";
import { SET_CART_TYPE } from "./cart.type";

export const setIsCartOpen = cartOpen =>
  createAction(SET_CART_TYPE.SET_IS_CART_OPEN, cartOpen);
  
export const setCartItems = cartItem =>
  createAction(SET_CART_TYPE.SET_CART_ITEMS, cartItem);