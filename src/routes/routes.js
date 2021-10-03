import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LoginScreen, HomeScreen, NoteScreen, GoalScreen} from '../screens';

// https://reactnavigation.org/docs/auth-flow
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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

const AppTab = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'Notes'} component={NoteScreen} />
      <Tab.Screen name={'Goals'} component={GoalScreen} />
    </Tab.Navigator>
  );
};

export const AppNavigator = ({isSigned}) => {
  return <>{!isSigned ? <AuthStack /> : <AppTab />}</>;
};
