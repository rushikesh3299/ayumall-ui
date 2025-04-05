import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Products } from "./pages/product/Products";
import { Login } from "./pages/authPages/Login";
import { Signup } from "./pages/authPages/Signup";
import { Home } from "./pages/home/Home";
import { Footer } from "./components/footer/Footer";

const AppContent = () => {
  const location = useLocation();
  const hideFooter =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {!hideFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter basename="/">
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
