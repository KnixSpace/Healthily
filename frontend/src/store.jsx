import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./pages/register/RegisterSlice";
import patientPresentReducer from "./pages/patient/PatientPresentSlice";

export const store = configureStore({
  reducer: {
    registerPage: registerReducer,
    patientPresent: patientPresentReducer,
  },
});
