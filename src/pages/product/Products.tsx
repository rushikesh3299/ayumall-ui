import { getProducts } from "../../services/getProducts";

const Products = () => {
  try {
    getProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
  return (
    <div>
      <h1>Products</h1>
      {/* Add your product listing logic here */}
    </div>
  );
};

export default Products;
