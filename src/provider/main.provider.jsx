import { UserProvider } from "../context/user.context";
import { ProductsProvider } from "../context/product.context";
import { CartProvider } from "../context/cart.context";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

const MainProvider = ({ children }) => (
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider> {children} </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
)

export default MainProvider;