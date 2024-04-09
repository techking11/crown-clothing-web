import { createContext, useEffect, useReducer } from "react"; // useState
import { getCategoriesWithCollection } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
    categories: {},
});

const SET_PRODUCT = { SET_PRODUCT: "SET PRODUCT" };
const productReducer = (state, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case SET_PRODUCT.SET_PRODUCT:
      return {
        ...state,
        categories: payload
      }
    default:
      return false;
  }
}
const INITIAL_STATE = { categories: {} };

export const ProductsProvider = ({ children }) => {
    // const [categories, setCategories ] = useState({});
    
    const [{ categories }, dispatch] = useReducer(productReducer, INITIAL_STATE);
    const setCategories = (category) => {
      dispatch({ type: SET_PRODUCT.SET_PRODUCT, payload: category });
    }
    
    useEffect(() => {
        (async () => {
            const categoriesMap = await getCategoriesWithCollection();
            setCategories(categoriesMap);
        })();
    }, []);
    
    const value = { categories };
    return <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
};