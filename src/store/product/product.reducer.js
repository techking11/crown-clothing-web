import { PRODUCT_ACTION_TYPE } from "./product.type";

const PRODUCT_INITIAL_STATE = {
  categories: {},
}

export const productReducer = (state = PRODUCT_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  
  switch(type) {
    case PRODUCT_ACTION_TYPE.SET_PRODUCT_TYPE:
      return {
        ...state,
        categories: payload,
      }
    default:
      return state;
  }
}