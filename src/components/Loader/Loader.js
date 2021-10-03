import React from 'react';
import {View, Image, Text} from 'react-native';
import {DotsLoader} from 'react-native-indicator';
import Logo from '../../assets/logotype.png';
import styles from './styles';

export const Loader = () => {
  return (
    <View style={styles.loading_container}>
      <Image source={Logo} style={styles.logo} />
      <DotsLoader size={25} color={'rgba(248, 245, 246, 0.8)'} />
    </View>
  );
};
