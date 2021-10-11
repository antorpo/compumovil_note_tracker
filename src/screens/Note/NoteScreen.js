/* eslint-disable react-hooks/exhaustive-deps */
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
import {NotesList} from '../../components/Note/NotesList';
import {
  getCategoriesUser,
  getNotesUser,
  selectNoteUser,
} from '../../store/actions/noteActions';
import NotCategory from '../../assets/not_category.png';
import styles from './styles';
import {firebase} from '../../config/firebase';
import {FloatingAction} from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import NoteIcon from '../../assets/check.png';
import CategoryIcon from '../../assets/category.png';

const NoteScreen = ({
  navigation,
  getCategories,
  getNotes,
  user_id,
  selectNote,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [category, setCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    subscribeCategories();
  }, []);

  const subscribeCategories = async () => {
    // Real-time subscription to categories
    firebase
      .firestore()
      .collection('categories')
      .where('user_id', '==', user_id)
      .orderBy('name')
      .onSnapshot(serverUpdate => {
        const categoriesList = serverUpdate.docs.map(doc => {
          const data = doc.data();
          data.id = doc.id;

          return data;
        });

        getCategories(categoriesList);
        setCategories(categoriesList);
      });
  };

  const subscribeNotes = async category_id => {
    firebase
      .firestore()
      .collection('notes')
      .where('category_id', '==', category_id)
      .orderBy('timestamp')
      .onSnapshot(serverUpdate => {
        const notesList = serverUpdate.docs.map(doc => {
          const data = doc.data();
          data.id = doc.id;
          data.timestamp = data.timestamp.toDate().toLocaleDateString('en-US');

          return data;
        });

        getNotes(notesList);
        setNotes(notesList);
      });
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    // Reset selected data:
    setCategory(null);
    setNotes([]);

    setRefreshing(false);
  }, []);

  const handleSelectCategory = async item => {
    if (item) {
      await subscribeNotes(item.id);
      setCategory(item);
    } else {
      // Reset selected data:
      setCategory(null);
      setNotes([]);
    }
  };

  const handleSelectNote = async note => {
    await selectNote(note);
    navigation.navigate('NewNote');
    console.log('nota seleccionada');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
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
              <View style={styles.categoryContainer}>
                <Text style={styles.sectionText}>Notes</Text>
                {notes.length === 0 ? (
                  <Text style={styles.sectionSubText}>Not notes</Text>
                ) : (
                  <NotesList data={notes} onPress={handleSelectNote} />
                )}
              </View>
            )}
          </View>

          <View style={styles.addButtonContainer}>
            <FloatingAction
              actions={actionsFiltered(category)}
              onPressItem={name => {
                if (name === 'bt_language') {
                  console.log('melo');
                }
                console.log(`selected button: ${name}`);
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const actionsFiltered = category => {
  const newActions = [...actions];
  if (category) {
    newActions.push({
      text: 'New Note',
      name: 'new_note',
      icon: NoteIcon,
      buttonSize: 56,
      position: 2,
    });
  }

  return newActions;
};

const actions = [
  {
    text: 'New Category',
    name: 'new_category',
    icon: CategoryIcon,
    buttonSize: 56,
    position: 1,
  },
];

const mapStateToProps = state => ({
  user_id: state.user.id,
});

const mapDispatchToProps = dispatch => ({
  getCategories: categories => dispatch(getCategoriesUser(categories)),
  getNotes: notes => dispatch(getNotesUser(notes)),
  selectNote: note => dispatch(selectNoteUser(note)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteScreen);
