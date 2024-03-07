import { Route, Routes } from "react-router-dom";
import Home from "./sass/pages/Home";
import ContextProducts from "./context/ContextProducts";
function App() {
  return (
    <ContextProducts>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ContextProducts>
  );
}

export default App;
