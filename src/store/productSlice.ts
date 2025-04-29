import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "auth",
  initialState: {
    products: [],
    filter: {
      sortBy: "",
      categories: [] as string[],
      rating: 2,
    },
  },
  reducers: {
    saveProducts: (state, action) => {
      return { ...state, products: action.payload };
    },
    modifyFilter: (state, action) => {
      switch (action.payload.type) {
        case "CLEAR_ALL":
          return {
            ...state,
            filter: {
              sortBy: "",
              categories: [],
              rating: 0,
            },
          };
        case "SORT":
          return {
            ...state,
            filter: {
              ...state.filter,
              sortBy: action.payload.sortBy,
            },
          };
        case "CATEGORIZE":
          if (state.filter.categories.includes(action.payload.category)) {
            return {
              ...state,
              filter: {
                ...state.filter,
                categories: state.filter.categories.filter(
                  (item) => item !== action.payload.category
                ),
              },
            };
          } else {
            return {
              ...state,
              filter: {
                ...state.filter,
                categories: [
                  ...state.filter.categories,
                  action.payload.category,
                ],
              },
            };
          }
        case "RATE":
          return {
            ...state,
            filter: {
              ...state.filter,
              rating: action.payload.rating,
            },
          };
      }
    },
  },
});

export const { saveProducts, modifyFilter } = productSlice.actions;
export default productSlice.reducer;
