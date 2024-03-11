import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContextProducts from "./context/ContextProducts";
import ProductInfo from "./pages/ProductInfo";
import Shop from "./pages/Shop";
import CartContext from "./context/CartContext";
import CartPage from "./pages/CartPage";
function App() {
  return (
    <ContextProducts>
      <CartContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product-info" element={<ProductInfo />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart-page" element={<CartPage />} />
        </Routes>
      </CartContext>
    </ContextProducts>
  );
}

export default App;
