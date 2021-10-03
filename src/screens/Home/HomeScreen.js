import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

export const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen Working!</Text>
    </View>
  );
};

export default connect(null, null)(HomeScreen);
