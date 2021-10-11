import React from 'react';
import {View, FlatList} from 'react-native';
import {GoalItem} from './GoalItem';

export const GoalsList = ({data, onPress}) => {
  const onPressExtended = goal => {
    // Nothing
  };

  const renderItem = ({item}) => {
    // Nothing
    return <GoalItem goal={item} onPress={() => onPressExtended(item)} />;
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
