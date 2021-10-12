import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {addNewCategoryUser} from '../../store/actions/noteActions';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Modal from 'react-native-modal';
import {size} from '../../constants/size';
import styles from './styles';

const CategoryModal = ({visible, setVisible, addNewCategory}) => {
  //const [isModalVisible, setModalVisible] = useState(visible);
  const [name, setName] = useState('');

  const toggleModal = () => {
    setVisible(!visible);
  };

  const addCategory = async () => {
    const category = {
      name,
    };

    await addNewCategory(category);
    setVisible(false);
  };

  return (
    <View style={{flex: 1}}>
      <Modal
        deviceWidth={size.width}
        deviceHeight={size.height}
        isVisible={visible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContainerContent}>
            <TouchableOpacity onPress={toggleModal} style={styles.closeIcon}>
              <Icon name="close" size={32} />
            </TouchableOpacity>
            <View style={styles.bodyContainer}>
              <Text style={styles.bodyText}>Create Category</Text>
              <TextInput
                placeholder="Category name here"
                style={styles.input}
                value={name}
                onChangeText={value => setName(value)}
              />
              <TouchableOpacity onPress={addCategory} style={styles.saveIcon}>
                <Icon name="save" size={32} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  addNewCategory: category => dispatch(addNewCategoryUser(category)),
});

export default connect(null, mapDispatchToProps)(CategoryModal);
