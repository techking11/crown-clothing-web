import "./cart-dropdown.styles.scss";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const goCheckoutPage = () => navigate("/checkout");
  
  return (<div className="cart-dropdown-container">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />
        )) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <Button onClick={goCheckoutPage}>GO TO CHECKOUT</Button>
  </div>
  )
};

export default CartDropdown