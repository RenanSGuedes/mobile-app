import React from 'react';
import { StyleSheet, View } from 'react-native';

import Home from './src/pages/Home'
import A2_Temperature from './src/pages/A2_Temperature'
import InitialOptions from './src/pages/InitialOptions'
import ListPlot from './src/pages/ListPlot'
import NFT_ListPlot from './src/pages/NFT_ListPlot'

export default function App() {
  return (
    <View style={styles.container}>
      <NFT_ListPlot />
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