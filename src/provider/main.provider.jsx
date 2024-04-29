// import { UserProvider } from "../context/user.context";
import { ProductsProvider } from "../context/product.context";
import { CartProvider } from "../context/cart.context";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { reduxStore } from "../store/redux-store";
// import { persistor, store } from "../store/store";
// import { PersistGate } from "redux-persist/integration/react";

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