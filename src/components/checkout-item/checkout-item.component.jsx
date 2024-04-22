// import { useContext } from "react";
import "./checkout-item.styles.scss";
// import { CartContext } from "../../context/cart.context";
// import { useSelector } from "react-redux";

import { addItemToCart, removeItemFromCart, clearItemFromCart} from "../../store/cart/cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  // const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
  const dispatch = useDispatch();
  const product = useSelector(selectCartItems);
  
  const removeItemHandler = () => dispatch(removeItemFromCart(product, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(product, cartItem));
  const clearItemHandler = () => dispatch(clearItemFromCart(product, cartItem));
  
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={name} />
      </div>
      <span className='name'> {name} </span>
      <span className='quantity'>
        <div className='arrow' onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className='price'> ${price}</span>
      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
