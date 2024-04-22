import "./cart-icon.styles.scss";
import ShoppingIcon from "../../assets/004 shopping-bag.svg";
// import { useContext } from "react";
// import { CartContext } from "../../context/cart.context";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartIcon = () => {
  
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  
  // const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  // const { cartCount } = useContext(CartContext);
  return (
    <div className="cart-icon-container" onClick={toggleCartOpen}>
      <img src={ShoppingIcon} className="shopping-icon" alt="Shopping Icon" />
      <span className="item-count">{cartCount ?? 0}</span>
    </div>
  )
}

export default CartIcon