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
    marginLeft: 20,
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
  },
  image: {
    width: '100%',
    height: 450,
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
  titleStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: color.grisClaro,
    fontSize: size.font,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  editorConfig: {
    backgroundColor: color.grisClaro,
  },
  editorStyle: {
    borderRadius: 10,
  },
  newNoteButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  newNoteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#97befc',
    width: '25%',
    padding: 20,
    borderRadius: 10,
  },
});

export default styles;
