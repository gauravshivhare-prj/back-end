import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

export let store = configureStore({
  reducer: {
    auth: authReducer,
  },
});