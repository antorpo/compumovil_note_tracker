import {firebase} from '../config/firebase';

export const createGoal = async goal => {
  await firebase.firestore().collection('goals').add(goal);
};


