import { SET_CART_TYPE } from "./cart.type";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CART_TYPE.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case SET_CART_TYPE.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};
