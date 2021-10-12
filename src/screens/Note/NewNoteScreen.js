import React, {useState, useRef} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {RichEditor, RichToolbar} from 'react-native-pell-rich-editor';
import {
  selectNoteUser,
  addNewNoteUser,
  updateNoteUser,
  deleteNoteUser,
} from '../../store/actions/noteActions';
import styles from './styles';
import {size} from '../../constants/size';
import {isDefined} from '../../utils/functions';
import {showInfoToast} from '../../utils/toast';

const NewNoteScreen = ({
  route,
  navigation,
  noteSelected,
  selectNote,
  addNote,
  updateNote,
  deleteNote,
}) => {
  const {category} = route.params;
  const [note, setNote] = useState(noteSelected);
  const [title, setTitle] = useState(noteSelected ? noteSelected.title : '');
  const [body, setBody] = useState(noteSelected ? noteSelected.body : '');
  const RichText = useRef();

  const validateFields = () => {
    if (!isDefined(title)) {
      showInfoToast('Title Info', 'please enter a title');
      return false;
    }

    if (!isDefined(body)) {
      showInfoToast('Body Info', 'please enter a body');
      return false;
    }

    return true;
  };

  const handleNewNote = async () => {
    if (validateFields()) {
      const noteObj = {
        title: title,
        body: body,
        category_id: category.id,
      };

      if (isDefined(note) && isDefined(category)) {
        await updateNote({...noteObj, id: noteSelected.id});
      } else {
        await addNote(noteObj);
      }

      await selectNote(null);
      navigation.goBack();
    }
  };

  const handleDelete = () => {
    Alert.alert('Confirm', 'Are you sure to delete?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          deleteNote(noteSelected.id);
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerBack}>
            <Pressable
              onPress={() => navigation.goBack()}
              style={{transform: [{rotate: '180deg'}]}}>
              <Icon name="trending-flat" size={40} />
            </Pressable>
            <Text style={styles.headerText}>
              {note ? 'Edit Note' : 'New Note'}
            </Text>
          </View>
          {noteSelected ? (
            <Pressable onPress={handleDelete}>
              <Icon name="delete" size={32} />
            </Pressable>
          ) : null}
        </View>

        <View>
          <View style={styles.titleContainer}>
            <View style={styles.titleStyle}>
              <Text style={styles.titleText}>Title</Text>
              <Text style={styles.titleTextSecondary}>{category.name}</Text>
            </View>
            <TextInput
              placeholder="Note title here"
              style={styles.input}
              value={title}
              onChangeText={value => setTitle(value)}
            />
          </View>

          <View>
            <RichEditor
              initialContentHTML={body}
              containerStyle={styles.editorStyle}
              disabled={false}
              editorStyle={styles.editorConfig}
              ref={RichText}
              placeholder={'Start Writing Here'}
              onChange={value => setBody(value)}
              initialHeight={size.height * 0.6}
            />
            <RichToolbar editor={RichText} />
          </View>

          <View style={styles.newNoteButtonContainer}>
            <TouchableOpacity
              style={[styles.newNoteButton]}
              onPress={handleNewNote}>
              <Icon name="done" size={32} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  noteSelected: state.notes.note,
});

const mapDispatchToProps = dispatch => ({
  selectNote: note => dispatch(selectNoteUser(note)),
  addNote: note => dispatch(addNewNoteUser(note)),
  updateNote: note => dispatch(updateNoteUser(note)),
  deleteNote: note_id => dispatch(deleteNoteUser(note_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewNoteScreen);
