import { createSlice } from "@reduxjs/toolkit";

export const utilitySlice = createSlice({
  name: "utility",
  initialState: {
    showFilterMobileNav: false,
  },
  reducers: {
    setShowFilterMobileNav: (state, action) => {
      return { ...state, showFilterMobileNav: action.payload };
    },
  },
});

export const { setShowFilterMobileNav } = utilitySlice.actions;
export default utilitySlice.reducer;
