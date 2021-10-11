import {StyleSheet} from 'react-native';
import {size} from '../../constants/size';
import {color} from '../../constants/theme';

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: '2.5%',
    marginVertical: 10,
    borderRadius: 16,
    backgroundColor: color.grisClaro,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '45%',
  },
  itemText: {
    fontSize: size.font,
    fontWeight: '700',
    textAlign: 'left',
  },
  percentageText: {
    position: 'relative',
    bottom: '45%',
    fontSize: size.littleTitle,
    fontWeight: '700',
  },
  itemContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
