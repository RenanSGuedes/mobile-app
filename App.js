import React from 'react';
import { StyleSheet, View } from 'react-native';


import InitialOptions from './src/pages/InitialOptions'
import Home from './src/pages/Home'

import A2_Temperature from './src/pages/A2_Temperature'
import B2_Temperature from './src/pages/B2_Temperature'
import NFT_Temperature from './src/pages/NFT_Temperature'

import A2_Flow from './src/pages/A2_Flow'

import ListPlot from './src/pages/ListPlot'
import A2_ListPlot from './src/pages/A2_ListPlot'
import B2_ListPlot from './src/pages/B2_ListPlot'
import NFT_ListPlot from './src/pages/NFT_ListPlot'


export default function App() {
  return (
    <View style={styles.container}>
      <A2_Flow />
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