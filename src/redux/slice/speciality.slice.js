import { createSlice } from "@reduxjs/toolkit";

const specialitySlice = createSlice({
  name: "speciality",
  initialState: {
    isLoading: false,
    specialities: [],
  },
  reducers: {
    getSpecialityStart: (state) => {
      state.isLoading = true;
    },
    getSpecialitySuccess: (state, action) => {
      state.isLoading = false;
      state.specialities = action.payload;
    },
    getSpecialityFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  getSpecialityFailure,
  getSpecialityStart,
  getSpecialitySuccess,
} = specialitySlice.actions;

export default specialitySlice.reducer;
