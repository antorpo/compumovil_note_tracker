import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {CategoryItem} from './CategoryItem';

export const CategoriesList = ({data, onPress}) => {
  const [selectedId, setSelectedId] = useState(null);

  const onPressExtended = category => {
    // Toggle state selected or not
    if (category.id === selectedId) {
      onPress(null);
      setSelectedId(null);
    } else {
      onPress(category);
      setSelectedId(category.id);
    }
  };

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#416eb5' : '#97befc';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <CategoryItem
        category={item}
        onPress={() => onPressExtended(item)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        horizontal={true}
      />
    </View>
  );
};
