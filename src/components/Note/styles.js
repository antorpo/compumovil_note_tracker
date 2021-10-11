import {StyleSheet} from 'react-native';
import {size} from '../../constants/size';
import {color} from '../../constants/theme';

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 4,
    borderRadius: 16,
    backgroundColor: color.grisClaro,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  itemText: {
    fontSize: size.font,
    fontWeight: '700',
    textAlign: 'left',
  },
  dateContainer: {
    flexDirection: 'row',
  },
});

export default styles;
