import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

export const CategoryItem = ({
  onPress,
  category,
  backgroundColor,
  textColor,
}) => {
  return (
    <TouchableOpacity
      style={[styles.itemContainer, backgroundColor]}
      onPress={onPress}>
      <Text style={[styles.itemText, textColor]}>{category.name}</Text>
    </TouchableOpacity>
  );
};
