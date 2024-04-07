import { Fragment, useContext } from "react"
import { ProductsContext } from "../../context/product.context"
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categories } = useContext(ProductsContext);
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
