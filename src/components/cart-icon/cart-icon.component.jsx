import "./cart-icon.styles.scss";
import ShoppingIcon from "../../assets/004 shopping-bag.svg";

import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartIcon = () => {

  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <div className="cart-icon-container" onClick={toggleCartOpen}>
      <img src={ShoppingIcon} className="shopping-icon" alt="Shopping Icon" />
      <span className="item-count">{cartCount ?? 0}</span>
    </div>
  )
}

export default CartIcon;