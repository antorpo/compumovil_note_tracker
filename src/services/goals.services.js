import {firebase} from '../config/firebase';

export const createGoal = async goal => {
  await firebase.firestore().collection('goals').add(goal);
};

export const getAllGoalsByUser = async user_id => {
  return null;
};

export const getGoalByUser = async () => {
  return null;
};

export const updateGoal = async note => {
  return null;
};

export const deleteGoal = async note_id => {
  return null;
};

export const deleteAllGoals = async () => {
  return null;
};
