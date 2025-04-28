import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import utilityReducer from "./utilitySlice";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    utility: utilityReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
