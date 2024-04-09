import { createContext, useEffect, useReducer } from "react"; // useState

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === productToAdd.id ?
        { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    )
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToremove) => {
  const existingCartItems = cartItems.find(cartItem => cartItem.id === productToremove.id);
  if (existingCartItems.quantity === 1)
    return cartItems.filter(cartItem => cartItem.id !== productToremove.id);
  
  return cartItems.map(cartItem => cartItem.id === productToremove.id ?
    { ...cartItem, quantity: cartItem.quantity -1 } : cartItem
  );
}

const clearCartItem = (cartItems, productToClear) => 
  cartItems.filter(cartItem => cartItem.id !== productToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => { },
  cartItems: [],
  addItemToCart: () => { },
  removeItemFromCart: () => { },
  clearItemFromCart: () => { },
  cartCount: 0,
  cartTotalPrice: 0,
});

const SET_CART = { 
  SET_CART: "SET CART",
  SET_CART_OPEN: "SET CART OPEN",
};
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotalPrice: 0,
};

const cartReducer = ( state, action ) => {
  const { type, payload } = action;
  
  switch ( type ) {
    case SET_CART.SET_CART:
      return {
        ...state,
        ...payload
      }
    case SET_CART.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload
      }
    default:
      return false;
  }
}

export const CartProvider = ({ children }) => {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartItems, setCartItem] = useState([]);
  // const [cartCount, setCartCount] = useState(0);
  // const [cartTotalPrice, setCartTotalPrice] = useState(0);
  
  const [{
    isCartOpen,
    cartItems,
    cartCount,
    cartTotalPrice,
  }, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  
  const setIsCartOpen = (bool) => {
    dispatch({ type: SET_CART.SET_CART_OPEN, payload: bool });
  }
  
  const updateItemReducer = ( newCartItems ) => {
    const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    
    const newTotalPrice = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0); 
    
    dispatch({
      type: SET_CART.SET_CART,
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotalPrice: newTotalPrice
      }
    });
  }

  // useEffect(() => {
  //   const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
  //   setCartCount(newCartCount);
  // }, [cartItems]);

  // useEffect(() => {
  //   const newTotalPrice = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
  //   setCartTotalPrice(newTotalPrice);
  // }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    const addCart = addCartItem(cartItems, productToAdd);
    updateItemReducer(addCart);
  }

  const removeItemFromCart = (productToremove) => {
    const removeCart = removeCartItem(cartItems, productToremove);
    updateItemReducer(removeCart);
  }

  const clearItemFromCart = (productToClear) => {
    const clearCart = clearCartItem(cartItems, productToClear);
    updateItemReducer(clearCart);
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    cartTotalPrice,
    removeItemFromCart,
    clearItemFromCart
  };
  return <CartContext.Provider value={value}> {children} </CartContext.Provider>
}