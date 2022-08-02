import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/RootNavigation';

export default function App() {
  return (
      <SafeAreaProvider>
        <RootNavigation/>
      </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({})