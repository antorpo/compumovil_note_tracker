import {addNote} from '../slices/noteSlice';
import {ejecutarConTry} from './baseAction';
import {getCategories, getNotes, selectNote} from '../slices/noteSlice';

export const getCategoriesUser = categories => {
  return ejecutarConTry(async (dispatch, getState) => {
    dispatch(getCategories(categories));
  });
};

export const getNotesUser = notes => {
  return ejecutarConTry(async (dispatch, getState) => {
    // Delete timestamp property:
    //notes.forEach(note => delete note.timestamp);
    dispatch(getNotes(notes));
  });
};

export const selectNoteUser = note => {
  return ejecutarConTry(async (dispatch, getState) => {
    dispatch(selectNote(note));
  });
};

export const addNewNote = note => {
  return ejecutarConTry(async (dispatch, getState) => {
    dispatch(addNote(addNote));
  });
};

export const generarError = () => {
  return ejecutarConTry(async (dispatch, getState) => {
    throw Error('Algo ocurrio mal');
  });
};
