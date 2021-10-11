import React from 'react';
import {View, FlatList} from 'react-native';
import {NoteItem} from './NoteItem';

export const NotesList = ({data, onPress}) => {
  const onPressExtended = note => {
    // Nothing
  };

  const renderItem = ({item}) => {
    // Nothing
    return <NoteItem note={item} onPress={() => onPressExtended(item)} />;
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
