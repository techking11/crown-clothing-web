import { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotalPrice } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      { cartItems.map(cartItem => 
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      )}
      <div className='total'>TOTAL: ${cartTotalPrice ?? 0}</div>
    </div>
  )
}

export default Checkout;
