import "./home.css";
import { NavLink, useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-page-container">
      <div className="banner">
        <div className="banner-logo-text">
          <p className="banner-title">AyuMall</p>
          <p className="banner-slogan">India's Traditional Pharmacist</p>
        </div>
        <p className="banner-discount">
          Upto <span>10% Off</span> on all products
        </p>
        <NavLink className="banner-shop-btn" to="/product">
          Shop Now
        </NavLink>
      </div>

      <div className="featured-category">
        <div className="featured-title">Featured Categories</div>
        <div className="half-border"></div>
        <div className="featured-category-section">
          <div
            className="featured-card"
            onClick={() => {
              //   productDispatch({ type: "CATEGORIZE", payload: "Avaleha" });
              navigate("./product");
            }}
          >
            <div className="featured-card-title">Avaleha</div>
            <div className="featured-card-info">
              Avaleha or Lehya is a semi-solid preparation of drugs, prepared
              with addition of jaggery, sugar or sugar-candy and boiled with
              prescribed juices or decoction.
            </div>
          </div>
          <div
            className="featured-card"
            onClick={() => {
              //   productDispatch({ type: "CATEGORIZE", payload: "Rasayana" });
              navigate("./product");
            }}
          >
            <div className="featured-card-title">Rasayana</div>
            <div className="featured-card-info">
              Rasayana is an Ayurvedic tonic which helps in maintenance &
              promotion of health. Rasayana essentially means nutrition at all
              levels from macro to micro-cellular level.
            </div>
          </div>
          <div
            className="featured-card"
            onClick={() => {
              //   productDispatch({ type: "CATEGORIZE", payload: "Churna" });
              navigate("./product");
            }}
          >
            <div className="featured-card-title">Churna</div>
            <div className="featured-card-info">
              Churna is a mixture of powdered herbs and or minerals used in
              Ayurvedic medicine. A churna can contain one or fixed quantity
              mixture of more herbs.
            </div>
          </div>
          <div
            className="featured-card"
            onClick={() => {
              //   productDispatch({ type: "CATEGORIZE", payload: "Vati" });
              navigate("./product");
            }}
          >
            <div className="featured-card-title">Vati</div>
            <div className="featured-card-info">
              Vati can also be called as ayurvedic pill or tablet. Vati is
              prepared from various herbs or minerals binded together with
              binders & exceptors in the form of tablets
            </div>
          </div>
        </div>
      </div>

      <div className="featured-brands">
        <div className="featured-title">Featured Brands</div>
        <div className="half-border"></div>
        <div className="features-brand-section">
          <img
            src="images/dabar.png"
            alt="Dabur img..."
            onClick={() => {
              //   productDispatch({ type: "BRANDWISE", payload: "Dabar" });
              navigate("./product");
            }}
          />
          <img
            src="images/dhootpapehswar.png"
            alt="Dhootpapeshwar img..."
            onClick={() => {
              //   productDispatch({ type: "BRANDWISE", payload: "Dhootpapeshwar" });
              navigate("./product");
            }}
          />
          <img
            src="images/santulan.png"
            alt="Santulan img..."
            onClick={() => {
              //   productDispatch({ type: "BRANDWISE", payload: "Santulan" });
              navigate("./product");
            }}
          />
          <img
            src="images/patanjali.png"
            alt="Patanjali img..."
            onClick={() => {
              //   productDispatch({ type: "BRANDWISE", payload: "Patanjali" });
              navigate("./product");
            }}
          />
        </div>
      </div>
    </div>
  );
};
