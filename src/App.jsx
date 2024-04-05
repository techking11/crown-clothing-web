import { Route, Routes } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/auth/auth.component";
import Shop from "./routes/shop/shop.component";

import "./app.scss";
import Checkout from "./routes/checkout/checkout.component";

const App = () => {
    return (
        <div className="main-container">
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="auth" element={<Authentication />} />
                    <Route path="checkout" element={<Checkout />} />
                </Route>
            </Routes>
        </div>
    )
};

export default App