import { Link } from "react-router-dom";
import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";
import { useSelector } from "react-redux";
import { selectProductIsLoading } from "../../store/product/product.selector";
import Spinner from "../spinner/spinner.component";

const CategoryPreview = ({ title, products }) => {

  const isLoading = useSelector(selectProductIsLoading);
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>{title.toLowerCase()}</Link>
      </h2>

      {
        isLoading ? <Spinner /> : <div className="preview">
          {products
            .filter((_, idx) => idx < 4)
            .map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      }

    </div>
  )
}

export default CategoryPreview;
