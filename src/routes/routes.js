import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LoginScreen, HomeScreen, NoteScreen, GoalScreen} from '../screens';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

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
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Notes') {
            iconName = 'article';
          } else if ((route.name = 'Goals')) {
            iconName = 'lightbulb';
          }

          return <Icon name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: '#3477eb',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {paddingBottom: 10, fontSize: 12},
        tabBarStyle: {height: 70},
        headerShown: false,
      })}>
      <Tab.Screen name={'Home'} component={HomeScreen} />
      <Tab.Screen name={'Notes'} component={NoteScreen} />
      <Tab.Screen name={'Goals'} component={GoalScreen} />
    </Tab.Navigator>
  );
};

export const AppNavigator = ({isSigned}) => {
  return <>{!isSigned ? <AuthStack /> : <AppTab />}</>;
};
