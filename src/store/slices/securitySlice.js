import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alert: {
    open: false,
    type: "",
    message: "",
  },
  loading: false,
  modal: {
    open: true,
    content: null,
  },
};

const securitySlice = createSlice({
  name: "securityReducer",
  initialState,
  reducers: {
    showLoading(state, action) {
      state.loading = action.payload;
    },
    showAlert(state, action) {
      state.alert = action.payload;
    },
    showModal(state, action) {
      state.modal = action.payload;
    },
  },
});

export const { showLoading, showAlert, showModal } = securitySlice.actions;

export default securitySlice.reducer;
