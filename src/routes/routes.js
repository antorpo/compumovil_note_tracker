import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, HomeScreen} from '../screens';

// https://reactnavigation.org/docs/auth-flow
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Login'} component={LoginScreen} />
    </Stack.Navigator>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Home'} component={HomeScreen} />
    </Stack.Navigator>
  );
};

export const AppNavigator = ({isSigned}) => {
  return <>{!isSigned ? <AuthStack /> : <AppStack />}</>;
};
