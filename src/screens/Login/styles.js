import {StyleSheet} from 'react-native';
import {color} from '../../constants/theme';
import {size} from '../../constants/size';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  imgContainer: {},
  img: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: color.blanco,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: size.radius,
    marginTop: 10,
    borderColor: color.negro,
    borderWidth: 1,
    fontSize: size.font,
  },
  buttonContainer: {
    marginTop: 30,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: color.azulClaro,
    borderRadius: size.radius,
    padding: 15,
    marginTop: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: color.blanco,
    fontWeight: '700',
    fontSize: size.font,
  },
  buttonOutline: {
    backgroundColor: color.blanco,
    borderColor: color.azulClaro,
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: color.azulClaro,
    fontWeight: '700',
    fontSize: size.font,
  },
});

export default styles;
