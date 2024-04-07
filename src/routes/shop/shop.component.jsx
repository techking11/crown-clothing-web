import { Fragment, useContext } from "react";
import { ProductsContext } from "../../context/product.context";

import "./shop.styles.scss";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { categories } = useContext(ProductsContext);
  return (
    <Fragment>
      {Object.keys(categories).map(title => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categories[title].map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  )
};

export default Shop;