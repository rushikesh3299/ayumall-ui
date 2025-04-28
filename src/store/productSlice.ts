import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "auth",
  initialState: {
    products: [],
  },
  reducers: {
    saveProducts: (state, action) => {
      return { ...state, products: action.payload };
    },
  },
});

export const { saveProducts } = productSlice.actions;
export default productSlice.reducer;
