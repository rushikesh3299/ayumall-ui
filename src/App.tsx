import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Products, Login, Signup, Home, ErrorPage } from "./pages";

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
        <Route path="/error" element={<ErrorPage />} />
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
