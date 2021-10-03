import {auth} from '../config/firebase';

export const registerEmailAndPassword = async (email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
  } catch (err) {
    // Enviamos de nuevo un error para que sea manejado por el try/cacth del baseAction (ejecutarConTry)
    throw new Error(err);
  }
};

export const loginEmailAndPassword = async (email, password) => {
  try {
    return await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    throw new Error(err);
  }
};

export const signOutEmailAndPassword = async () => {
  await auth.signOut();
};
