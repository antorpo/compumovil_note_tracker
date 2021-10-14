import {StyleSheet} from 'react-native';
import {size} from '../../constants/size';
import {fonts} from '../../constants/fonts';
import {color} from '../../constants/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: '5%',
  },
  header: {
    width: '100%',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontFamily: fonts.largeTitle,
    fontSize: size.largeTitle,
    fontWeight: '700',
  },
  sumaryBar: {
    width: '100%',
    marginVertical: size.padding,
    flexDirection: 'row-reverse',
    borderBottomWidth: 3,
    borderBottomColor: color.grisClaro,
  },
  sumaryBarText: {
    width: '30%',
    textAlign: 'right',
    fontFamily: fonts.text,
    fontSize: size.littleTitle,
    fontWeight: '700',
    borderBottomColor: color.grisOscuro,
    borderBottomWidth: 4,
  },
  charContainer: {
    marginTop: 20,
    marginBottom: 60,
  },
  chartKit: {
    borderRadius: 16,
    marginBottom: 20,
  },
  chartLabelContainer: {
    flexDirection: 'row',
    width: '40%',
    padding: 5,
  },
  chartLabel: {
    fontSize: size.littleTitle,
    fontWeight: '600',
  },
  infoPosition: {
    flexDirection: 'row',
  },
  infoContainer: {
    backgroundColor: color.grisClaro,
    padding: size.padding,
    borderRadius: size.radius,
    width: '50%',
  },
  infoText: {
    fontSize: size.font,
    fontFamily: fonts.text,
    fontWeight: '600',
    textAlign: 'left',
  },
  userContainer: {
    flexDirection: 'row',
  },
  userText: {
    fontSize: size.font,
    fontWeight: '700',
    marginLeft: 10,
    color: '#bababa',
  },
});

export default styles;
