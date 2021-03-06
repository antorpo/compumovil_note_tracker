import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  goals: [],
  goal: {
    name: '',
    description: '',
    finish_date: null,
    color: '',
    completed: false,
    tasks: [
      {
        name: '',
      },
    ],
  },
};

const goalSlice = createSlice({
  name: 'goalReducer',
  initialState,
  reducers: {
    getGoals(state, action) {
      state.goals = action.payload;
    },
    addGoal(state, action) {
      state.goals.push(action.payload);
    },
  },
});

export const {getGoals, addGoal} = goalSlice.actions;

export default goalSlice.reducer;
