import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Pointer from './src/assets/svg_components/Pointer'
import PointerBackground from './src/assets/svg_components/PointerBackground'
import XPointerBackground from './src/assets/svg_components/XPointerBackground'
import Home from './src/pages/Home'
import A2_Temperature from './src/pages/A2_Temperature'

export default function App() {
  return (
    <View style={styles.container}>
      <A2_Temperature />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});