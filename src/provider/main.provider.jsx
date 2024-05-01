import { ProductsProvider } from "../context/product.context";
import { CartProvider } from "../context/cart.context";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { reduxStore } from "../store/redux-store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store/store";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "../utils/stripe/stripe.utils";

const MainProvider = ({ children }) => (
  <StrictMode>
    <Provider store={reduxStore}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <ProductsProvider>
              <CartProvider> {children} </CartProvider>
            </ProductsProvider>
          </Elements>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
)

export default MainProvider;