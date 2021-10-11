import React from 'react';
import {View, FlatList} from 'react-native';
import {NoteItem} from './NoteItem';

export const NotesList = ({data, onPress}) => {
  const renderItem = ({item}) => {
    return <NoteItem note={item} onPress={() => onPress(item)} />;
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
