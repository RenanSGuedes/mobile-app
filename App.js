import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Pointer from './src/assets/svg_components/Pointer'
import PointerBackground from './src/assets/svg_components/PointerBackground'
import XPointerBackground from './src/assets/svg_components/XPointerBackground'
import BottomBar from './src/assets/components/BottomBar'
import Home from './src/pages/Home'

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
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