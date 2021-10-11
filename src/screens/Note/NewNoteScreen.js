import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import styles from './styles';

const NewNoteScreen = ({navigation, noteSelected}) => {
  const [note, setNote] = useState(noteSelected);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerBack}>
            <Pressable
              onPress={() => console.log('pepito el mago')}
              style={{transform: [{rotate: '180deg'}]}}>
              <Icon name="trending-flat" size={40} />
            </Pressable>
            <Text style={styles.headerText}>Dashboard</Text>
          </View>
          <Pressable>
            <Icon name="delete" size={32} />
          </Pressable>
        </View>

        <View></View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  noteSelected: state.notes.note,
});

export default connect(mapStateToProps, null)(NewNoteScreen);
