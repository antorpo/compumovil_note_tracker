/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useCallback, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  SafeAreaView,
  RefreshControl,
  Alert,
} from 'react-native';
import {BarChart, LineChart} from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {signOut} from '../../store/actions/userActions';
import {firebase} from '../../config/firebase';
import styles from './styles';

const HomeScreen = ({userEmail, signOutUser, user_id}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [countNotes, setCountNotes] = useState(0);
  const [countGoals, setCountGoals] = useState({
    active: 0,
    complete: 0,
  });

  const dataBarChart = {
    labels: ['Active Notes', 'Active Goals', 'Goals Completed'],
    datasets: [
      {
        data: [countNotes, countGoals.active, countGoals.complete],
      },
    ],
  };

  useEffect(() => {
    getNotesCount();
    getGoalsCount();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 5000);
  }, []);

  const getNotesCount = async () => {
    firebase
      .firestore()
      .collection('notes')
      .where('user_id', '==', user_id)
      .onSnapshot(serverUpdate => {
        setCountNotes(serverUpdate.size);
      });
  };

  const getGoalsCount = async () => {
    firebase
      .firestore()
      .collection('goals')
      .where('user_id', '==', user_id)
      .onSnapshot(serverUpdate => {
        const all = serverUpdate.size;
        let completed = 0;
        serverUpdate.docs.forEach(doc => {
          if (doc.data().completed) {
            completed++;
          }
        });

        setCountGoals({active: all - completed, complete: completed});
      });
  };

  const handleSignOut = async () => {
    Alert.alert('Confirm', 'Are you sure?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          signOutUser();
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.header}>
          <Text style={styles.headerText}>Dashboard</Text>
          <Pressable onPress={handleSignOut}>
            <Icon name="logout" size={32} />
          </Pressable>
        </View>

        <View style={styles.userContainer}>
          <Icon name="person" size={25} color="#bababa" />
          <Text style={styles.userText}>{userEmail}</Text>
        </View>

        <View>
          <View style={styles.sumaryBar}>
            <Text style={styles.sumaryBarText}>SUMMARY</Text>
          </View>

          <View style={styles.charContainer}>
            <View style={styles.chartLabelContainer}>
              <Text style={{...styles.chartLabel, color: '#4286f4'}}>
                HISTORICAL
              </Text>
              <Icon name="analytics" size={30} color="#4286f4" />
            </View>

            <BarChart
              style={styles.chartKit}
              data={dataBarChart}
              width={440}
              height={350}
              chartConfig={barChartConfig}
              verticalLabelRotation={0}
              fromZero={true}
              yAxisInterval={1}
            />

            <View style={{...styles.infoPosition, justifyContent: 'flex-end'}}>
              <View style={styles.infoContainer}>
                <Text
                  style={styles.infoText}>{`ACTIVE NOTES: ${countNotes}`}</Text>
                <Text
                  style={
                    styles.infoText
                  }>{`ACTIVE GOALS: ${countGoals.active}`}</Text>
                <Text
                  style={
                    styles.infoText
                  }>{`COMPLETE GOALS: ${countGoals.complete}`}</Text>
              </View>
            </View>
          </View>

          <View style={styles.charContainer}>
            <View style={styles.chartLabelContainer}>
              <Text style={{...styles.chartLabel, color: '#d6756f'}}>
                MONTHLY DISTRIBUTION
              </Text>
              <Icon name="analytics" size={30} color="#d6756f" />
            </View>

            <LineChart
              style={styles.chartKit}
              data={dataLineChart}
              width={440}
              height={350}
              chartConfig={lineChartConfig}
              verticalLabelRotation={30}
            />

            <View
              style={{...styles.infoPosition, justifyContent: 'flex-start'}}>
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>{`BEST MONTH: ${0}`}</Text>
                <Text style={styles.infoText}>{`WORST MONTH: ${0}`}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const dataLineChart = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      data: [0, 0, 0, 0, 0, 0, 0, 0, 2, 8, 0, 0],
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      strokeWidth: 3,
    },
  ],
};

const barChartConfig = {
  backgroundGradientFrom: '#2c569c',
  backgroundGradientFromOpacity: 0.8,
  backgroundGradientTo: '#4286f4',
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 1,
  useShadowColorFromDataset: false, // optional
  decimalPlaces: 0,
};

const lineChartConfig = {
  backgroundGradientFrom: '#f12711',
  backgroundGradientFromOpacity: 0.8,
  backgroundGradientTo: '#f5af19',
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 1,
  useShadowColorFromDataset: false, // optional
  decimalPlaces: 0,
};

const mapStateToProps = state => ({
  userEmail: state.user.email,
  user_id: state.user.id,
});

const mapDispatchToProps = dispatch => ({
  signOutUser: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
