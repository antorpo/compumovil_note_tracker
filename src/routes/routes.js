import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, RegisterScreen, HomeScreen} from '../screens';

// https://reactnavigation.org/docs/auth-flow
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name={'Login'} component={LoginScreen} />
      <Stack.Screen name={'Register'} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name={'Home'} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export const AppNavigator = ({isSigned}) => {
  return <>{!isSigned ? <AuthStack /> : <AppStack />}</>;
};
