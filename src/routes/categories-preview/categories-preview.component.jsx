import { Fragment } from "react"
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { selectProducts } from "../../store/product/product.selector";

const CategoriesPreview = () => {
  const categories = useSelector(selectProducts);
  return (
    <Fragment>
      {Object.keys(categories).map(title => {
        const products = categories[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        )
      })}
    </Fragment>
  )
}

export default CategoriesPreview
