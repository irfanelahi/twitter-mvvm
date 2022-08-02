import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LandingView from './LandingView';

export default function LandingViewController(props) {
  const navigateToLogin = values => {
    props.navigation.navigate('Login');
  };

  return <LandingView navigateToLogin={navigateToLogin} />;
}

const styles = StyleSheet.create({});
