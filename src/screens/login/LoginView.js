import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {Icon, SocialIcon} from '@rneui/themed';
import {Formik} from 'formik';
import EngText from '../../customComponents/EngText';
import colors from '../../config/colors';
import * as yup from 'yup';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Header} from '@rneui/base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButton from '../../customComponents/CustomButton';

export default function LoginView(props) {
  const {
    hidePassword,
    setHidePassword,
    submitLogin,
    cancelLogin,
    nextButton,
    showPasswordField,
  } = props;

  return (
    <>
      <View style={styles.container}>
        <Header
          containerStyle={{backgroundColor: null}}
          leftComponent={
            <Text
              style={{color: '#000', fontWeight: '400'}}
              onPress={() => cancelLogin()}>
              Cancel
            </Text>
          }
          centerComponent={
            <AntDesign name="twitter" color={colors.blue} size={30} />
          }
        />
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={values => {
            submitLogin(values);
          }}
          validationSchema={yup.object().shape({
            email: yup.string().email().required().label('Email'),

            password: yup.string().min(6).max(10).required().label('Password'),
          })}>
          {({
            values,
            handleChange,
            errors,
            setFieldTouched,
            touched,
            isValid,
            handleSubmit,
          }) => (
            <View style={{flex: 1}}>
              <View style={{paddingHorizontal: '5%', flex: 1}}>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    marginVertical: 30,
                  }}>
                  {showPasswordField
                    ? 'Enter your password'
                    : 'To get started, first enter your phone, email, or @username'}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    paddingBottom: 8,
                    marginBottom: 25,
                  }}>
                  <Icon
                    name="alternate-email"
                    size={20}
                    color="#666"
                    style={{marginRight: 5}}
                  />
                  <TextInput
                    placeholder="email"
                    placeholderTextColor={colors.grey}
                    value={values.email}
                    onChangeText={handleChange('email')}
                    autoCapitalize="none"
                    onBlur={() => setFieldTouched('email')}
                    style={{flex: 1, paddingVertical: 0}}
                  />
                </View>
                {touched.email && errors.email && (
                  <EngText style={styles.error}>{errors.email}</EngText>
                )}
                {!showPasswordField ? null : (
                  <View
                    style={{
                      flexDirection: 'row',
                      borderBottomColor: '#ccc',
                      borderBottomWidth: 1,
                      paddingBottom: 8,
                      marginBottom: 25,
                    }}>
                    <Ionicons
                      name="ios-lock-closed-outline"
                      size={20}
                      color="#666"
                      style={{marginRight: 5}}
                    />
                    <TextInput
                      placeholder="Password"
                      placeholderTextColor={colors.grey}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      autoCapitalize="none"
                      onBlur={() => setFieldTouched('password')}
                      style={{flex: 1, paddingVertical: 0}}
                      secureTextEntry={!hidePassword}
                    />

                    <Icon
                      name={hidePassword ? 'eye' : 'eye-off'}
                      type="feather"
                      size={18}
                      color={colors.tomato}
                      onPress={() => setHidePassword()}
                    />
                  </View>
                )}

                {touched.password && errors.password && (
                  <EngText style={styles.error}>{errors.password}</EngText>
                )}

                {/* <TouchableOpacity
                    disabled={!isValid}
                    onPress={handleSubmit}
                    activeOpacity={0.5}
                    style={[
                      styles.button,
                      {
                        backgroundColor: !isValid ? colors.grey : '#AD40AF',
                        borderColor: !isValid ? colors.grey : '#AD40AF',
                      },
                    ]}>
                    <EngText style={styles.btnText}>Login</EngText>
                  </TouchableOpacity> */}
              </View>
              {showPasswordField ? (
                <View style={{flex: 0.3, paddingHorizontal: '5%'}}>
                  <CustomButton
                    onPress={handleSubmit}
                    disabled={!isValid}
                    label={'Log in'}
                    style={{
                      backgroundColor: isValid ? colors.black : colors.grey,
                      borderWidth: 0,
                    }}
                  />
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 18,
                      fontWeight: 'bold',
                      textDecorationLine: 'underline',
                    }}>
                    Forgot Password?
                  </Text>
                </View>
              ) : (
                <View style={styles.registered}>
                  <EngText style={{color: colors.lightBlack}}>
                    Forgot Password?
                  </EngText>
                  <Pressable
                    disabled={!values.email}
                    onPress={() => nextButton()}
                    style={[
                      styles.nextButton,
                      {
                        backgroundColor: values.email
                          ? colors.black
                          : colors.grey,
                      },
                    ]}>
                    <Text style={{color: colors.white}}>Next</Text>
                  </Pressable>
                </View>
              )}
            </View>
          )}
        </Formik>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  form: {},
  fields: {
    flexDirection: 'row',
    borderWidth: 0.5,
    width: '80%',
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 4,
  },
  textInput: {
    width: '75%',
  },
  error: {
    color: colors.danger,
    alignSelf: 'center',
    paddingVertical: 2,
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  button: {
    borderWidth: 1,
    width: '100%',
    alignSelf: 'center',
    paddingVertical: 10,
    backgroundColor: colors.tomato,
    borderColor: colors.tomato,
    elevation: 2,
    borderRadius: 5,
    marginVertical: 20,
  },
  btnText: {
    textAlign: 'center',
    color: colors.white,
  },
  registered: {
    flex: 0.1,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nextButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 60,
    borderRadius: 20,
  },
});
