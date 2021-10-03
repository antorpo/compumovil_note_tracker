import {StyleSheet} from 'react-native';

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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    borderColor: 'rgba(21, 21, 21, 0.8)',
    borderWidth: 1,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 30,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'rgba(0, 130, 255, 0.8)',
    borderRadius: 10,
    padding: 15,
    marginTop: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutline: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderColor: 'rgba(0, 130, 255, 0.8)',
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: 'rgba(0, 130, 255, 0.8)',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default styles;
