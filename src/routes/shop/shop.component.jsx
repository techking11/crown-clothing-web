import { Route, Routes } from "react-router-dom";
import "./shop.styles.scss";
import Category from "../category/category.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";

const Shop = () => (
  <Routes>
    <Route index element={<CategoriesPreview />} />
    <Route path=":category" element={<Category />} />
  </Routes>
);

export default Shop;