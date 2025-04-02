import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/product/Products";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
