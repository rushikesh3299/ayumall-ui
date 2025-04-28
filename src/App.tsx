import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Product, Login, Signup, Home, ErrorPage, UserProfile } from "./pages";
import { Navbar } from "./components";

const AppContent = () => {
  const location = useLocation();
  const hideFooter =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/userprofile" element={<UserProfile />} />
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
