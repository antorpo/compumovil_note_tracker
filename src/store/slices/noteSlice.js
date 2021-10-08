import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  notes: [],
  note: {
    title: '',
    body: '',
    category: '',
  },
};

const noteSlice = createSlice({
  name: 'noteReducer',
  initialState,
  reducers: {
    addNote(state, action) {
      state.notes.push(action.payload);
    },
  },
});

export const {addNote} = noteSlice.actions;

export default noteSlice.reducer;
