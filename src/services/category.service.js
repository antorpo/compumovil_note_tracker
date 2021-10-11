import {firebase} from '../config/firebase';

export const createCategory = async note => {
  await firebase.firestore().collection('notes').add(note);
};

export const updateCategory = async note => {
  return null;
};

export const deleteCategory = async note_id => {
  return null;
};
