import {addNote} from '../slices/noteSlice';
import {ejecutarConTry} from './baseAction';
import {getCategories, getNotes, selectNote} from '../slices/noteSlice';
import {createNote, updateNote, deleteNote} from '../../services/notes.service';
import {createCategory} from '../../services/category.service';
import {showSuccessToast} from '../../utils/toast';

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

export const addNewNoteUser = note => {
  return ejecutarConTry(async (dispatch, getState) => {
    const user_id = getState().user.id;

    // Add the user_id property
    await createNote({...note, user_id});
    dispatch(addNote(addNote));

    showSuccessToast('Success', 'Note Added!');
  });
};

export const updateNoteUser = note => {
  return ejecutarConTry(async (dispatch, getState) => {
    const user_id = getState().user.id;
    await updateNote({...note, user_id});
    showSuccessToast('Success', 'Note Edited!');
  });
};

export const deleteNoteUser = note_id => {
  return ejecutarConTry(async (dispatch, getState) => {
    await deleteNote(note_id);
  });
};

export const addNewCategoryUser = category => {
  return ejecutarConTry(async (dispatch, getState) => {
    const user_id = getState().user.id;
    await createCategory({...category, user_id});
    showSuccessToast('Success', 'Category Added!');
  });
};

export const generarError = () => {
  return ejecutarConTry(async (dispatch, getState) => {
    throw Error('Algo ocurrio mal');
  });
};
