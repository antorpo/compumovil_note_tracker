import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  email: '',
  signedIn: false,
  token: '',
  id: '',
};

const userSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    signInUser(state, action) {
      state.email = action.payload.email;
      state.signedIn = true;
      state.id = action.payload.id;
    },
    signOutUser(state, action) {
      state.email = '';
      state.signedIn = false;
      state.id = '';
    },
  },
});

export const {signInUser, signOutUser} = userSlice.actions;

export default userSlice.reducer;
