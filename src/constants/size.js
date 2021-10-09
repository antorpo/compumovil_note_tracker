import {Dimensions, StatusBar, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const deviceHeight =
  Platform.OS === 'ios' ? height : height - StatusBar.currentHeight;

export const size = {
  base: 14,
  font: 16,
  radius: 10,
  padding: 30,
  largeTitle: 35,
  mediumTitle: 26,
  littleTitle: 20,
  height: deviceHeight,
  width: width,
};
