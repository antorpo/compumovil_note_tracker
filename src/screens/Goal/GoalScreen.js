/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import {firebase} from '../../config/firebase';
import {getGoalsUser} from '../../store/actions/goalActions';
import NotGoal from '../../assets/not_goals.png';
import {GoalsList} from '../../components/Goal/GoalsList';
import {FloatingAction} from 'react-native-floating-action';
import GoalIcon from '../../assets/goal.png';

const GoalScreen = ({user_id, getGoals}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    subscribeGoals(completed);
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await subscribeGoals(completed);
    setRefreshing(false);
  }, []);

  const subscribeGoals = async completedValue => {
    // Real-time subscription to goals
    firebase
      .firestore()
      .collection('goals')
      .where('user_id', '==', user_id)
      .where('completed', '==', completedValue)
      .onSnapshot(serverUpdate => {
        const goalsList = serverUpdate.docs.map(doc => {
          const data = doc.data();
          data.id = doc.id;

          return data;
        });

        console.log(goalsList);
        getGoals(goalsList);
        setGoals(goalsList);
      });
  };

  const handleGoals = async completedValue => {
    await subscribeGoals(completedValue);
    setCompleted(completedValue);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.header}>
          <Text style={styles.headerText}>Goals</Text>
        </View>

        <View>
          <View style={styles.sumaryBar}>
            <Text style={styles.sumaryBarText}>PROGRESS</Text>
          </View>

          <View style={styles.buttonsContainer}>
            <Pressable
              onPress={() => handleGoals(false)}
              style={[
                styles.buttonPressable,
                !completed ? styles.buttonSelected : null,
              ]}>
              <Text
                style={[
                  styles.textButtons,
                  !completed ? styles.textSelected : null,
                ]}>
                Active
              </Text>
            </Pressable>
            <Pressable
              onPress={() => handleGoals(true)}
              style={[
                styles.buttonPressable,
                completed ? styles.buttonSelected : null,
              ]}>
              <Text
                style={[
                  styles.textButtons,
                  completed ? styles.textSelected : null,
                ]}>
                Completed
              </Text>
            </Pressable>
          </View>

          <View>
            {goals.length === 0 ? (
              <View style={styles.imageContainer}>
                <Image source={NotGoal} style={styles.image} />
              </View>
            ) : (
              <View style={styles.goalsContainer}>
                <GoalsList data={goals} />
              </View>
            )}
          </View>

          <View style={styles.addButtonContainer}>
            <FloatingAction
              actions={actions}
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

const actions = [
  {
    text: 'New Goal',
    name: 'new_goal',
    icon: GoalIcon,
    buttonSize: 56,
    position: 1,
  },
];

const mapStateToProps = state => ({
  user_id: state.user.id,
});

const mapDispatchToProps = dispatch => ({
  getGoals: goals => dispatch(getGoalsUser(goals)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalScreen);
