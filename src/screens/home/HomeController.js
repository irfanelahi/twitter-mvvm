import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import HomeView from './HomeView';

export default function HomeController(props) {
  const submitLogout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return <HomeView submitLogout={submitLogout} />;
}

const styles = StyleSheet.create({});
