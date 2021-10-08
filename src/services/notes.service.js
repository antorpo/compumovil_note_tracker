import {firebase} from '../config/firebase';

export const createNote = async note => {
  await firebase.firestore().collection('notes').add(note);
};

export const getAllNotesByUser = async user_id => {
  return null;
};

export const getNoteByUser = async () => {
  return null;
};

export const updateNote = async note => {
  return null;
};

export const deleteNote = async note_id => {
  return null;
};

export const deleteAllNotes = async () => {
  return null;
};
