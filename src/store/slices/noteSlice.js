import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  notes: [],
  note: {},
};

const noteSlice = createSlice({
  name: 'noteReducer',
  initialState,
  reducers: {
    getCategories(state, action) {
      state.categories = action.payload;
    },
    getNotes(state, action) {
      state.notes = action.payload;
    },
    selectNote(state, action) {
      state.note = action.payload;
    },
    addNote(state, action) {
      state.notes.push(action.payload);
    },
  },
});

export const {getCategories, getNotes, addNote, selectNote} = noteSlice.actions;

export default noteSlice.reducer;
