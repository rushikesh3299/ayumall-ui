import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    firstname: "",
    lastname: "",
    email: "",
  },
  reducers: {
    saveUserData: (state, action) => {
      return { ...state, isLoggedIn: true, ...action.payload };
    },
    removeUserData: (state) => {
      return {
        ...state,
        isLoggedIn: false,
        firstname: "",
        lastname: "",
        email: "",
      };
    },
  },
});

export const { saveUserData, removeUserData } = authSlice.actions;
export default authSlice.reducer;
