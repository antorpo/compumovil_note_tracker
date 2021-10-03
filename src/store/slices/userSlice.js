import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  email: '',
  passwords: '',
  signedIn: false,
};

const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    signInUser(state, action) {
      state = action.payload;
    },
    logoutUser(state, action) {
      state = initialState;
    },
  },
});

export const {signInUser, logoutUser} = userSlice.actions;

export default userSlice.reducer;
