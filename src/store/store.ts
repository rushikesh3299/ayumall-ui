import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import utilityReducer from "./utilitySlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    utility: utilityReducer,
  },
});
