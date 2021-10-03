import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

const GoalScreen = () => {
  return (
    <View>
      <Text>Goal Screen Working!</Text>
    </View>
  );
};

export default connect(null, null)(GoalScreen);
