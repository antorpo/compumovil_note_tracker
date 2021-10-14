import React from 'react';
import {connect} from 'react-redux';
import {View, Text, SafeAreaView, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import styles from './styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const EditGoalScreen = ({navigation, route}) => {
  const {goal} = route.params;
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
            <Text style={styles.headerText}>Goal</Text>
          </View>
          <Text style={styles.secondaryText}>{goal.name.toUpperCase()}</Text>
        </View>

        <View>
          <View style={styles.taskContainer}>
            <View style={styles.sumaryBar}>
              <Text style={styles.sumaryBarText}>TASKS</Text>
            </View>
            <BouncyCheckbox
              size={30}
              fillColor="#84de83"
              text="Presentar anteproyecto"
              iconStyle={{borderColor: '#84de83'}}
              textStyle={{fontSize: 16}}
              onPress={isChecked => {}}
            />
          </View>

          <View style={styles.taskContainer}>
            <View style={styles.sumaryBar}>
              <Text style={styles.sumaryBarText}>TASKS COMPLETED</Text>
            </View>
            <BouncyCheckbox
              size={30}
              fillColor="grey"
              text="Presentar anteproyecto"
              iconStyle={{borderColor: '#84de83'}}
              textStyle={{fontSize: 16}}
              onPress={isChecked => {}}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default connect(null, null)(EditGoalScreen);
