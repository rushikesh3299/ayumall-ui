import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: null,
  },
  reducers: {
    saveUserData: (state, action) => {
      state.userData = action.payload;
    },
    removeUserData: (state) => {
      state.userData = null;
    },
  },
});

export const { saveUserData, removeUserData } = authSlice.actions;
export default authSlice.reducer;
