import React from 'react';
import {Loader} from './src/components';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {AppNavigator} from './src/routes/routes';
import Toast from 'react-native-toast-message';
import {toastConfig} from './src/utils/toast';

export const App = () => {
  const isSigned = useSelector(state => state.user.signedIn);
  const loading = useSelector(state => state.security.loading);

  // AppNavigator contiene la logica para las rutas protegidas que solo seran visibles si el usuario esta loggeado
  return (
    <NavigationContainer>
      {loading ? <Loader /> : <AppNavigator isSigned={isSigned} />}
      <Toast config={toastConfig} ref={ref => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};
