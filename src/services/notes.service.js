import {firebase} from '../config/firebase';

export const createNote = async note => {
  const noteObj = {
    ...note,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  };

  await firebase.firestore().collection('notes').add(noteObj);
};

export const updateNote = async note => {
  console.log('dataUpdate', note);
  const noteObj = {
    ...note,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  };

  await firebase.firestore().collection('notes').doc(note.id).update(noteObj);
};

export const deleteNote = async note_id => {
  await firebase.firestore().collection('notes').doc(note_id).delete();
};
