import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  LoginScreen,
  HomeScreen,
  NoteScreen,
  GoalScreen,
  NewNoteScreen,
  NewGoalScreen,
  EditGoalScreen,
} from '../screens';
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

const NoteStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="NoteList"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'NoteList'} component={NoteScreen} />
      <Stack.Screen name={'NewNote'} component={NewNoteScreen} />
    </Stack.Navigator>
  );
};

const GoalStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="GoalList"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'GoalList'} component={GoalScreen} />
      <Stack.Screen name={'NewGoal'} component={NewGoalScreen} />
      <Stack.Screen name={'EditGoal'} component={EditGoalScreen} />
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
      <Tab.Screen name={'Notes'} component={NoteStack} />
      <Tab.Screen name={'Goals'} component={GoalStack} />
    </Tab.Navigator>
  );
};

export const AppNavigator = ({isSigned}) => {
  return <>{!isSigned ? <AuthStack /> : <AppTab />}</>;
};
