import { configureStore } from "@reduxjs/toolkit";
import AcceptanceReducer from "../slice/acceptance.slice";
import DoctorReducer from "../slice/doctor.slice";
import SpecialityReducer from "../slice/speciality.slice";

const store = configureStore({
  reducer: {
    acceptance: AcceptanceReducer,
    doctor: DoctorReducer,
    speciality: SpecialityReducer,
  },
  devTools: process.env.NODE_ENV != "production",
});

export default store;
