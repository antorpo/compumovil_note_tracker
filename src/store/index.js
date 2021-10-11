import {configureStore} from '@reduxjs/toolkit';
import {userSlice, goalSlice, noteSlice, securitySlice} from './slices';

export const store = configureStore({
  reducer: {
    user: userSlice,
    goals: goalSlice,
    notes: noteSlice,
    security: securitySlice,
  },
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
  // devTools: process.env.NODE_ENV !== 'production', (Deshabilitar para produccion)
});
