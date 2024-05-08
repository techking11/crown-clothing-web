import { Route, Routes } from "react-router-dom";
import "./shop.styles.scss";
import Category from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { useEffect } from "react";
import { fetchCategoriesStart } from "../../store/product/product.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  )
};

export default Shop;