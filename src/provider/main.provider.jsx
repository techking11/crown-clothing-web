import { ProductsProvider } from "../context/product.context";
import { CartProvider } from "../context/cart.context";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { reduxStore } from "../store/redux-store";

const MainProvider = ({ children }) => (
  <StrictMode>
    <Provider store={reduxStore}>
      {/* <PersistGate persistor={persistor}> */}
        <BrowserRouter>
          {/* <UserProvider> */}
          <ProductsProvider>
            <CartProvider> {children} </CartProvider>
          </ProductsProvider>
          {/* </UserProvider> */}
        </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </StrictMode>
)

export default MainProvider;