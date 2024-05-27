import { createSlice } from "@reduxjs/toolkit";

const acceptanceSlice = createSlice({
  name: "acceptance",
  initialState: {
    isLoading: false,
    acceptance: {},
  },
  reducers: {
    getAcceptanceStart: (state) => {
      state.isLoading = true;
    },
    getAcceptanceSuccess: (state, action) => {
      state.isLoading = false;
      state.acceptance = action.payload;
    },
    getAcceptanceFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  getAcceptanceFailure,
  getAcceptanceStart,
  getAcceptanceSuccess,
} = acceptanceSlice.actions;

export default acceptanceSlice.reducer;
