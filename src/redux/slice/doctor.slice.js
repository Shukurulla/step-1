import { createSlice } from "@reduxjs/toolkit";

const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    isLoading: false,
    doctors: [],
  },
  reducers: {
    getDoctorsStart: (state) => {
      state.isLoading = true;
    },
    getDoctorsSuccess: (state, action) => {
      state.isLoading = false;
      state.doctors = action.payload;
    },
    getDoctorsFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getDoctorsFailure, getDoctorsStart, getDoctorsSuccess } =
  doctorSlice.actions;

export default doctorSlice.reducer;
