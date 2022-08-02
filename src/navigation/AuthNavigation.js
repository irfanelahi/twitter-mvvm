import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginController from '../screens/login/LoginController';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingViewController from '../screens/landingScreen/LandingViewController';

export default function AuthNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LandingScreen"
        component={LandingViewController}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginController}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
