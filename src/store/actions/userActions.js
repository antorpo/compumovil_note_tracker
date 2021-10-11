import {ejecutarConTry} from './baseAction';
import {
  registerEmailAndPassword,
  loginEmailAndPassword,
  signOutEmailAndPassword,
} from '../../services/firebase.service';
import {showSuccessToast} from '../../utils/toast';
import {signInUser, signOutUser} from '../slices/userSlice';
import {showLoading} from '../slices/securitySlice';

export const signUp = (email, password) => {
  return ejecutarConTry(async (dispatch, getState) => {
    dispatch(showLoading(true));
    await registerEmailAndPassword(email, password);
    dispatch(showLoading(false));
    showSuccessToast('Success', 'Register complete');
  });
};

export const signIn = (email, password) => {
  return ejecutarConTry(async (dispatch, getState) => {
    dispatch(showLoading(true));
    const userCredentials = await loginEmailAndPassword(email, password);

    // Save the credentials in store and put signIn = true
    dispatch(
      signInUser({
        email: userCredentials.user.email,
        id: userCredentials.user.uid,
      }),
    );
    dispatch(showLoading(false));
    showSuccessToast('Success', `Welcome ${userCredentials.user.email}`);
  });
};

export const signOut = () => {
  return ejecutarConTry(async (dispatch, getState) => {
    await signOutEmailAndPassword();
    dispatch(signOutUser());
  });
};
