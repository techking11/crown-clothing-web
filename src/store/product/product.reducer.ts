import { CreateAction } from "./product.action";
import { Category, PRODUCT_ACTION_TYPE } from "./product.type";

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
}

const PRODUCT_INITIAL_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const productReducer = (state = PRODUCT_INITIAL_STATE, action = {} as CreateAction) => {

  switch (action.type) {
    case PRODUCT_ACTION_TYPE.SET_PRODUCT_START:
      return {
        ...state,
        isLoading: true,
      };
    case PRODUCT_ACTION_TYPE.SET_PRODUCT_SUCCESS:
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
      };
    case PRODUCT_ACTION_TYPE.SET_PRODUCT_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
