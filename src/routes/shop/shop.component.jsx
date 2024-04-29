import { Route, Routes } from "react-router-dom";
import "./shop.styles.scss";
import Category from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesWithCollection } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/product/product.reducer";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const categoriesMap = await getCategoriesWithCollection();
      dispatch(setCategories(categoriesMap));
    })();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
};

export default Shop;