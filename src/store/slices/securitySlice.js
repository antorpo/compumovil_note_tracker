import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  modal: {
    open: true,
    content: null,
  },
};

const securitySlice = createSlice({
  name: 'securityReducer',
  initialState,
  reducers: {
    showLoading(state, action) {
      state.loading = action.payload;
    },
    showModal(state, action) {
      state.modal = action.payload;
    },
  },
});

export const {showLoading, showModal} = securitySlice.actions;

export default securitySlice.reducer;
