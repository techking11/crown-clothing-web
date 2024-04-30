import Button from "../button/button.component";
import "./product-card.styles.scss";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart/cart.reducer";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const dispatch = useDispatch();
  const addItem = () => dispatch(addItemToCart(product));
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name"> {name} </span>
        <span className="price"> {price} </span>
      </div>
      <Button buttonType='inverted' onClick={addItem}>Add to cart</Button>
    </div>
  );
};

export default ProductCard;