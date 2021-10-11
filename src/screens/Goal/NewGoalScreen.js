import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

const NewGoalScreen = () => {
  return (
    <View>
      <Text>NewGoalScreen Working!</Text>
    </View>
  );
};

export default connect(null, null)(NewGoalScreen);
