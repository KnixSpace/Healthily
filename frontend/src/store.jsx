import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./pages/register/RegisterSlice";

export const store = configureStore({
  reducer: {
    registerPage: registerReducer,
  },
});
