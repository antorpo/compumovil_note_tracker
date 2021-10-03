import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import styles from './styles';
import Logo from '../../assets/logotype.png';
import {signIn, signUp} from '../../store/actions/userActions';
import {isDefined, validarCorreo} from '../../utils/functions';
import {showErrorToast} from '../../utils/toast';

const LoginScreen = ({register, login}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateFields = () => {
    if (!isDefined(email) || !validarCorreo(email)) {
      showErrorToast('Email Error', 'please enter a valid email');
      return false;
    }

    if (!isDefined(password)) {
      showErrorToast('Password Error', 'password its obligatory field');
      return false;
    }

    return true;
  };

  const registerUser = () => {
    if (validateFields()) {
      register(email, password);
    }
  };

  const loginUser = () => {
    if (validateFields()) {
      login(email, password);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.imgContainer}>
        <Image source={Logo} style={styles.img} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={value => setEmail(value)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={value => setPassword(value)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={loginUser} style={styles.button}>
          <Text style={styles.buttonText}>LogIn</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={registerUser}>
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const mapDispatchToProps = dispatch => ({
  register: (email, password) => dispatch(signUp(email, password)),
  login: (email, password) => dispatch(signIn(email, password)),
});

export default connect(null, mapDispatchToProps)(LoginScreen);
