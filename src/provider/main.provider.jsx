// import { UserProvider } from "../context/user.context";
import { ProductsProvider } from "../context/product.context";
import { CartProvider } from "../context/cart.context";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";

const MainProvider = ({ children }) => (
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <UserProvider> */}
        <ProductsProvider>
          <CartProvider> {children} </CartProvider>
        </ProductsProvider>
        {/* </UserProvider> */}
      </BrowserRouter>
    </Provider>
  </StrictMode>
)

export default MainProvider;