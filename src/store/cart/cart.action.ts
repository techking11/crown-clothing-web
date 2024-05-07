import {
  ActionWithPayload,
  createAction,
  withMatchable
} from "../../utils/reducer/reducer.utils";

import { CategoryItem } from "../product/product.type";

import {
  CartItem,
  SET_CART_TYPE
} from "./cart.type";

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {
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

const removeCartItem = (cartItems: CartItem[], productToremove: CartItem) => {
  const existingCartItems = cartItems.find(
    (cartItem) => cartItem.id === productToremove.id
  );
  if (existingCartItems && existingCartItems.quantity === 1)
    return cartItems.filter(cartItem => cartItem.id !== productToremove.id);

  return cartItems.map(cartItem =>
    cartItem.id === productToremove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems: CartItem[], productToClear: CartItem): CartItem[] =>
  cartItems.filter((cartItem) => cartItem.id !== productToClear.id);

export type setIsCartOpen = ActionWithPayload<SET_CART_TYPE.SET_IS_CART_OPEN, boolean>;

export type setCartItems = ActionWithPayload<SET_CART_TYPE.SET_CART_ITEMS, CartItem[]>;

export const setIsCartOpen = withMatchable((cartOpen: boolean): setIsCartOpen =>
  createAction(SET_CART_TYPE.SET_IS_CART_OPEN, cartOpen));

export const setCartItems = withMatchable((cartItem: CartItem[]): setCartItems =>
  createAction(SET_CART_TYPE.SET_CART_ITEMS, cartItem));

export const addItemToCart = (cartItems: CartItem[], productToAdd: CategoryItem) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
}

export const removeItemFromCart = (cartItems: CartItem[], productToremove: CartItem) => {
  const newCartItems = removeCartItem(cartItems, productToremove);
  return setCartItems(newCartItems);
}

export const clearItemFromCart = (cartItems: CartItem[], productToClear: CartItem) => {
  const newCartItem = clearCartItem(cartItems, productToClear);
  return setCartItems(newCartItem);
}
