import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

const NoteScreen = () => {
  return (
    <View>
      <Text>Note Screen Working!</Text>
    </View>
  );
};

export default connect(null, null)(NoteScreen);
