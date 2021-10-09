import React, {useState, useCallback} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import {BarChart, LineChart} from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import styles from './styles';

const HomeScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 5000);
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.header}>
          <Text style={styles.headerText}>Dashboard</Text>
          <Pressable>
            <Icon name="logout" size={32} />
          </Pressable>
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
                <Text style={styles.infoText}>{`ACTIVE NOTES: ${0}`}</Text>
                <Text style={styles.infoText}>{`ACTIVE GOALS: ${0}`}</Text>
                <Text style={styles.infoText}>{`COMPLETE GOALS: ${0}`}</Text>
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

const dataBarChart = {
  labels: ['Active Notes', 'Active Goals', 'Goals Completed'],
  datasets: [
    {
      data: [20, 45, 28],
    },
  ],
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
      data: [20, 45, 28, 80, 99, 43, 34, 43, 45, 45, 54, 54],
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

export default connect(null, null)(HomeScreen);
