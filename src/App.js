import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContextProducts from "./context/ContextProducts";
import ProductInfo from "./pages/ProductInfo";
function App() {
  return (
    <ContextProducts>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product-info" element={<ProductInfo />} />
      </Routes>
    </ContextProducts>
  );
}

export default App;
