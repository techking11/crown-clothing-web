import "./navigation.style.jsx";

import { Outlet } from "react-router-dom";
import CrwnLogo from "../../assets/007 crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import toast from "react-hot-toast";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { LogoContainer, NavLink, NavLinksContainer, NavigationContainer } from "./navigation.style.jsx";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const Navigation = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const currentUser = useSelector(selectCurrentUser);

  const signOutAuth = async () => {
    await signOutUser();
    toast.success('Successfully signed out !');
  }

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <img src={CrwnLogo} alt="Crown Clothing" className='logo' />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ?
            <NavLink as="span" onClick={signOutAuth}>SIGN OUT</NavLink>
            :
            <NavLink to='/auth'>SIGN IN</NavLink>
          }
          <CartIcon />

        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default Navigation;