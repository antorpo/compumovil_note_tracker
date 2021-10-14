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
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    fontFamily: fonts.largeTitle,
    fontSize: size.largeTitle,
    fontWeight: '700',
    marginLeft: 20,
  },
  secondaryText: {
    fontFamily: fonts.mediumTitle,
    fontSize: size.mediumTitle,
    fontWeight: '700',
    color: '#bababa',
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
  buttonsContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonPressable: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '50%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  buttonSelected: {
    backgroundColor: '#949494',
  },
  textSelected: {
    color: 'white',
  },
  textButtons: {
    fontSize: size.font,
    fontWeight: '600',
  },
  imageContainer: {
    width: '100%',
    padding: size.padding,
  },
  image: {
    width: '100%',
    height: 450,
  },
  goalsContainer: {
    marginVertical: 20,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  addButtonContainer: {
    width: '100%',
    position: 'absolute',
    top: size.height * 0.9,
  },
  headerBack: {
    flexDirection: 'row',
  },
  titleContainer: {
    marginVertical: 20,
    backgroundColor: 'grey',
  },
  titleStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontSize: size.mediumTitle,
    fontWeight: '700',
  },
  titleTextSecondary: {
    fontSize: size.littleTitle,
    fontWeight: '700',
    color: '#97befc',
  },
  input: {
    backgroundColor: color.grisClaro,
    fontSize: size.font,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  inputDescription: {
    height: '50%',
  },
});

export default styles;
