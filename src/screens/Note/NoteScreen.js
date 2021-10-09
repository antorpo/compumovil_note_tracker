import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import {connect} from 'react-redux';
import {CategoriesList} from '../../components/Category/CategoriesList';
import NotCategory from '../../assets/not_category.png';
import styles from './styles';

const NoteScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState(DATA);

  useEffect(() => {
    console.log('Notes show');
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 5000);
  }, []);

  const handleSelectCategory = category => {
    setCategory(category);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.header}>
          <Text style={styles.headerText}>Notes</Text>
        </View>

        <View>
          <View style={styles.categoryContainer}>
            <Text style={styles.sectionText}>Categories</Text>
            {categories.length === 0 ? (
              <Text style={styles.sectionSubText}>Not categories</Text>
            ) : (
              <CategoriesList
                data={categories}
                onPress={handleSelectCategory}
              />
            )}
          </View>

          <View>
            {!category ? (
              <View style={styles.imageContainer}>
                <Image source={NotCategory} style={styles.image} />
              </View>
            ) : (
              <Text>hola</Text>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Main',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'University',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Home',
  },
  {
    id: '58694a0f-3da1-471f-qwewq6-145571e29d72',
    title: 'Friends',
  },
  {
    id: '58694a0f-3da1-471f-bd96-wweqwe',
    title: 'Work',
  },
  {
    id: '58694a0f-3da1-471f-bd96-asdasdasd',
    title: 'Others',
  },
];

export default connect(null, null)(NoteScreen);
