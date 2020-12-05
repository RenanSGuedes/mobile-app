import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/pages/Home'
import A2_Temperature from './src/pages/A2_Temperature'
import InitialOptions from './src/pages/InitialOptions'

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