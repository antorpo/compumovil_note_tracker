import {firebase} from '../config/firebase';

export const createCategory = async category => {
  await firebase.firestore().collection('categories').add(category);
};

export const deleteCategory = async category_id => {
  return null;
};
