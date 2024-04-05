import { useState, createContext, useEffect } from "react";

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

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
    setCartTotalPrice(newTotalPrice);
  }, [cartItems]);

  const addItemToCart = (productToAdd) =>
    setCartItem(addCartItem(cartItems, productToAdd));

  const removeItemFromCart = (productToremove) =>
    setCartItem(removeCartItem(cartItems, productToremove));

  const clearItemFromCart = (productToClear) =>
    setCartItem(clearCartItem(cartItems, productToClear));

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