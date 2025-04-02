import axios from "axios";
import { API_URL } from "../utils/constants";

export const getProducts = async () => {
  try {
    const res = await axios.get(`${API_URL}/products`);
    console.log("Products fetched successfully:", res.data);
    return res.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
