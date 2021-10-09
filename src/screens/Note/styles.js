import {StyleSheet} from 'react-native';
import {size} from '../../constants/size';
import {fonts} from '../../constants/fonts';

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
  categoryContainer: {
    marginVertical: 20,
  },
  sectionText: {
    fontSize: size.littleTitle,
    fontWeight: '600',
  },
  sectionSubText: {
    fontSize: size.font,
    fontWeight: '800',
  },
  imageContainer: {
    width: '100%',
    padding: size.padding,
    backgroundColor: 'grey',
  },
  image: {
    width: '100%',
    height: 450,
  },
});

export default styles;
