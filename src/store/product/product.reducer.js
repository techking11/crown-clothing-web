import { PRODUCT_ACTION_TYPE } from "./product.type";

const PRODUCT_INITIAL_STATE = {
  categories: {},
  isLoading: false,
  error: null,
};

export const productReducer = (state = PRODUCT_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_ACTION_TYPE.SET_PRODUCT_TYPE:
      return {
        ...state,
        categories: payload,
      };
    case PRODUCT_ACTION_TYPE.SET_PRODUCT_START:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_ACTION_TYPE.SET_PRODUCT_SUCCESS:
      return {
        ...state,
        categories: payload,
        isLoading: false,
      };
    case PRODUCT_ACTION_TYPE.SET_PRODUCT_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
