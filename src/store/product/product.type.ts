export enum PRODUCT_ACTION_TYPE {
  SET_PRODUCT_TYPE = "PRODUCT/SET_PRODUCT_TYPE",
  SET_PRODUCT_START = "PRODUCT/SET_PRODUCT_START",
  SET_PRODUCT_SUCCESS = "PRODUCT/SET_PRODUCT_SUCCESS",
  SET_PRODUCT_FAILED = "PRODUCT/SET_PRODUCT_FAILED",
}

export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

export type Category = {
  title: string;
  imageUrl: string;
  items: CategoryItem[];
}

export type CategoryMap = {
  [key: string]: CategoryItem[];
}