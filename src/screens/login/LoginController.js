import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useState} from 'react';
import LoginView from './LoginView';
import auth from '@react-native-firebase/auth';

export default function LoginController(props) {
  const [hidePass, setHidePass] = useState(false);
  const [showPasswordField, setShowPasswordField] = useState(false);

  const setHidePassword = () => {
    setHidePass(!hidePass);
  };

  const submitLogin = values => {
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        console.log('User signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }
        if (error.code === 'auth/user-not-found') {
          Alert.alert('There is no user record corresponding to this email!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }
        if (error.code === 'auth/wrong-password') {
          Alert.alert(
            'The password is invalid or the user does not have a password',
          );
        }

      });
  };

  const cancelLogin = () => {
    props.navigation.goBack();
  };

  const nextButton = () => {
    setShowPasswordField(true);
  };

  return (
    <LoginView
      submitLogin={submitLogin}
      hidePassword={hidePass}
      setHidePassword={setHidePassword}
      cancelLogin={cancelLogin}
      nextButton={nextButton}
      showPasswordField={showPasswordField}
    />
  );
}

const styles = StyleSheet.create({});
