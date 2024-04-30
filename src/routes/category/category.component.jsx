import { useParams } from "react-router-dom";
import "./category.styles.scss";
import { useEffect, useState } from "react";
// import { ProductsContext } from "../../context/product.context";
import ProductCard from "../../components/product-card/product-card.component";
import { useSelector } from "react-redux";
import { selectProductIsLoading, selectProducts } from "../../store/product/product.selector";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  const { category } = useParams();
  const isLoading = useSelector(selectProductIsLoading);
  const categories = useSelector(selectProducts);
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <>
      <h2 className="category-title">{category.toLocaleLowerCase()}</h2>
      {isLoading ? <Spinner /> :
        <div className="category-container">
          {products && products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      }

    </>
  )
}

export default Category
