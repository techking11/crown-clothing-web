import { createContext, useEffect, useState } from "react";
import { getCategoriesWithCollection } from "../utils/firebase/firebase.utils";

export const ProductsContext = createContext({
    categories: {},
});

export const ProductsProvider = ({ children }) => {
    const [categories, setCategories ] = useState({});
    
    useEffect(() => {
        (async () => {
            const categoriesMap = await getCategoriesWithCollection();
            setCategories(categoriesMap);
        })();
    }, []);
    
    const value = { categories };
    return <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
};