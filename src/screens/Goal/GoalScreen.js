import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';

const GoalScreen = () => {
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
          <Text style={styles.headerText}>Goals</Text>
        </View>

        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default connect(null, null)(GoalScreen);
