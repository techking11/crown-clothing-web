import { useParams } from "react-router-dom";
import "./category.styles.scss";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../context/product.context";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(ProductsContext);
  const [products, setProducts] = useState(categories[category]);
  
  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);
  
  return (
    <>
      <h2 className="category-title">{category.toLocaleLowerCase()}</h2>
      <div className="category-container">
        {products && products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default Category
