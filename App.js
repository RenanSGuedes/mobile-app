import React from 'react';
import { StyleSheet, View } from 'react-native';

import InitialOptions from './src/pages/InitialOptions' 
import Home from './src/pages/Home' 

import A2_Temperature from './src/pages/A2_Temperature' 
import B2_Temperature from './src/pages/B2_Temperature' 
import NFT_Temperature from './src/pages/NFT_Temperature' 

import A2_Flow from './src/pages/A2_Flow' 
import B2_Flow from './src/pages/B2_Flow' 

import A2_Humidity from './src/pages/A2_Humidity' 
import B2_Humidity from './src/pages/B2_Humidity' 

import A2_Level from './src/pages/A2_Level'
import B2_Level from './src/pages/B2_Level'
import NFT_Level from './src/pages/NFT_Level' 

import ListPlot from './src/pages/ListPlot' 
import A2_ListPlot from './src/pages/A2_ListPlot' 
import B2_ListPlot from './src/pages/B2_ListPlot' 
import NFT_ListPlot from './src/pages/NFT_ListPlot' 

import A2_FlowPlot from './src/pages/A2_FlowPlot'
import B2_FlowPlot from './src/pages/B2_FlowPlot'

import A2_TemperaturePlot from './src/pages/A2_TemperaturePlot'
import B2_TemperaturePlot from './src/pages/B2_TemperaturePlot'
import NFT_TemperaturePlot from './src/pages/NFT_TemperaturePlot'

import A2_LevelPlot from './src/pages/A2_LevelPlot'
import B2_LevelPlot from './src/pages/B2_LevelPlot'
import NFT_LevelPlot from './src/pages/NFT_LevelPlot'

import A2_HumidityPlot from './src/pages/A2_HumidityPlot'
import B2_HumidityPlot from './src/pages/B2_HumidityPlot'

export default function App() {
  return (
    <View style={styles.container}>
      <B2_HumidityPlot />
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