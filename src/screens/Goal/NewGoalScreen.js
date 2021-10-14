import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, Text, SafeAreaView, Pressable, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import styles from './styles';

const NewGoalScreen = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState({
    name: '',
    description: '',
    finish_date: '',
    color: '',
  });

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
            <Text style={styles.headerText}>New Goal</Text>
          </View>
        </View>

        <View>
          <View style={styles.titleContainer}>
            <View style={styles.titleStyle}>
              <Text style={styles.titleText}>Name</Text>
            </View>
            <TextInput
              placeholder="Goal name here"
              style={styles.input}
              value={goal.name}
              onChangeText={value => setGoal({...goal, name: value})}
            />
          </View>

          <View style={styles.titleContainer}>
            <View style={styles.titleStyle}>
              <Text style={styles.titleText}>Description</Text>
            </View>
            <TextInput
              placeholder="Description here"
              style={[styles.input, styles.inputDescription]}
              value={goal.description}
              onChangeText={value => setGoal({...goal, description: value})}
              multiline={true}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default connect(null, null)(NewGoalScreen);
