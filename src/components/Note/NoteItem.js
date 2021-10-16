import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import styles from './styles';

export const NoteItem = ({onPress, note}) => {
  return (
    <TouchableOpacity style={[styles.itemContainer]} onPress={onPress}>
      <Icon name="check-circle" size={40} color="#97befc" />
      <View>
        <Text style={[styles.itemText]}>{note.title}</Text>
        <View style={styles.dateContainer}>
          <Icon name="event" size={20} color="#97befc" />
          <Text style={[styles.itemText]}>{'14/10/2021'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
