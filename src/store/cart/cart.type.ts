import { CategoryItem } from "../product/product.type";

export enum SET_CART_TYPE {
  SET_IS_CART_OPEN = 'CART/SET_IS_CART_OPEN',
  SET_CART_ITEMS = 'CART/SET_CART_ITEMS',
  SET_CART_COUNT = 'CART/SET_CART_COUNT',
  SET_CART_TOTAL = 'CART/SET_CART_TOTAL',
}

export type CartItem = CategoryItem & {
  quantity: number;
};