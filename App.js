import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Pointer from './src/assets/svg_components/Pointer'
import BackgroundPointer from './src/assets/svg_components/BackgroundPointer'
import XBackgroundPointer from './src/assets/svg_components/XBackgroundPointer'
import BottomBar from './src/assets/Components/BottomBar'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, world!</Text>
      <BottomBar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
