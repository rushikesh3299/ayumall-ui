import "./products.css";
import { Link } from "react-router-dom";
import { getProducts } from "../../services";
import { useEffect } from "react";
import { RootState, saveProducts } from "../../store";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

export const Products = () => {
  const dispatch = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const products = useTypedSelector((state) => state.product.products);

  const getAllProducts = async () => {
    try {
      const productRes = await getProducts();
      dispatch(saveProducts(productRes));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="product-list-section">
      {products.map((item) => (
        <div className="product-card" key={item._id}>
          <div className="product-card-img">
            <img src={item.image} alt="" />
            <i
              className="far fa-heart"
              //   onClick={() => addItemToWishlist(item)}
            ></i>
          </div>
          <div className="product-card-discription">
            <Link to={`/products/${item?._id}`}>
              <div className="product-card-name">{item.title}</div>
              <div className="product-card-brand">{item.brand}</div>
              <div className="product-card-price">
                <div>{item.price}Rs</div>
                <div>(15% OFF)</div>
              </div>
              <div className="product-card-quantity">{item.weight}</div>
            </Link>
            {/* <Rating productRating={item.ratings} /> */}

            <button
              className="product-card-btn-add"
              // onClick={() => addToCartHandler(item)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
