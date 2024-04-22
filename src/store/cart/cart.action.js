import { createAction } from "../../utils/reducer/reducer.utils";
import { SET_CART_TYPE } from "./cart.type";

export const setIsCartOpen = cartOpen =>
  createAction(SET_CART_TYPE.SET_IS_CART_OPEN, cartOpen);

export const setCartItems = cartItem =>
  createAction(SET_CART_TYPE.SET_CART_ITEMS, cartItem);

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToremove) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === productToremove.id
  );
  if (existingCartItems.quantity === 1)
    return cartItems.filter(cartItem => cartItem.id !== productToremove.id);

  return cartItems.map(cartItem =>
    cartItem.id === productToremove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, productToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== productToClear.id);

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(SET_CART_TYPE.SET_CART_ITEMS, newCartItems);
}

export const removeItemFromCart = (cartItems, productToremove) => {
  const newCartItems = removeCartItem(cartItems, productToremove);
  return createAction(SET_CART_TYPE.SET_CART_ITEMS, newCartItems);
}

export const clearItemFromCart = (cartItems, productToClear) => {
  const newCartItem = clearCartItem(cartItems, productToClear);
  return createAction(SET_CART_TYPE.SET_CART_ITEMS, newCartItem);
}
