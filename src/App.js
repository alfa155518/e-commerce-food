import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContextProducts from "./context/ContextProducts";
import ProductInfo from "./pages/ProductInfo";
import Shop from "./pages/Shop";
import CartContext from "./context/CartContext";
import CartPage from "./pages/CartPage";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
function App() {
  return (
    <ContextProducts>
      <CartContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="product-info" element={<ProductInfo />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart-page" element={<CartPage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </CartContext>
    </ContextProducts>
  );
}

export default App;
