import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/product/Products";
import { Login } from "./pages/authPages/Login";
import { Signup } from "./pages/authPages/Signup";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
