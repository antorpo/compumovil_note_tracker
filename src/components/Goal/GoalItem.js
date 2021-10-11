import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {ProgressChart} from 'react-native-chart-kit';
import {color} from '../../constants/theme';
import {size} from '../../constants/size';
import styles from './styles';

export const GoalItem = ({onPress, goal}) => {
  const colorChart = goal.completed ? 'rgba(146, 146, 146, 1)' : goal.color;
  const chartConfig = {
    backgroundGradientFrom: color.grisClaro,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: color.grisClaro,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => colorChart,
    strokeWidth: 3, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: false, // optional
    decimalPlaces: 0,
  };

  return (
    <TouchableOpacity style={[styles.itemContainer]} onPress={onPress}>
      <View style={styles.itemContent}>
        <Text style={[styles.itemText]}>{goal.name.toUpperCase()}</Text>
        <ProgressChart
          data={data}
          width={size.width * 0.33}
          height={160}
          strokeWidth={10}
          radius={65}
          chartConfig={chartConfig}
          hideLegend={true}
        />
        <Text style={[styles.percentageText, {color: colorChart}]}>
          {'90%'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const data = {
  data: [0.3],
};
