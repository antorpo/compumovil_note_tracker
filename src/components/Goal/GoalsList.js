import React from 'react';
import {View, FlatList} from 'react-native';
import {GoalItem} from './GoalItem';

export const GoalsList = ({data, onPress}) => {
  const renderItem = ({item}) => {
    return <GoalItem goal={item} onPress={() => onPress(item)} />;
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};
