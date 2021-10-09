import {StyleSheet} from 'react-native';
import {size} from '../../constants/size';

const styles = StyleSheet.create({
  itemContainer: {
    padding: size.padding,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  itemText: {
    fontSize: size.font,
    fontWeight: '600',
  },
});

export default styles;
