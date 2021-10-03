import React from 'react';
import {Loader} from './src/components';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {AppNavigator} from './src/routes/routes';

export const App = () => {
  const isSigned = useSelector(state => state.user.signedIn);
  const loading = useSelector(state => state.security.loading);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <NavigationContainer>
          <AppNavigator isSigned={isSigned} />
        </NavigationContainer>
      )}
    </>
  );
};
