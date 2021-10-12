import {StyleSheet} from 'react-native';
import {size} from '../../constants/size';
import {color} from '../../constants/theme';

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
  modalContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainerContent: {
    backgroundColor: color.grisClaro,
    width: '100%',
    height: '40%',
    padding: size.padding,
    borderRadius: size.radius,
  },
  closeIcon: {
    flexDirection: 'row-reverse',
  },
  input: {
    backgroundColor: color.grisClaro,
    fontSize: size.font,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  bodyContainer: {
    padding: size.padding,
  },
  bodyText: {
    fontSize: size.littleTitle,
    fontWeight: '700',
  },
  saveIcon: {
    marginTop: 15,
    backgroundColor: color.grisOscuro,
    borderRadius: size.radius,
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignSelf: 'flex-end',
  },
});

export default styles;
