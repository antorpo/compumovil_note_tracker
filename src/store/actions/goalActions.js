import {ejecutarConTry} from './baseAction';
import {getGoals} from '../slices/goalSlice';

export const getGoalsUser = goals => {
  return ejecutarConTry(async (dispatch, getState) => {
    dispatch(getGoals(goals));
  });
};
