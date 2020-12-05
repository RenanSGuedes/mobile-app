import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import Statistics from '../../assets/icons/Statistics'
import { vw } from 'react-native-expo-viewport-units'

export default function ListPlot() {
  return (
    <View style={styles.container}>
      <View style={styles.infoMenu}>
        <Text style={styles.titleMenu}>Gráficos</Text>
        
        <TouchableOpacity style={styles.block}>
          <View style={styles.layoutInRow}>
            <View style={styles.backgroundStatisticsIcon}>
              <Statistics width={vw(6)}/>
            </View>
            <View>
              <Text style={styles.normalText}>Substrato | Aberto</Text>
              <Text style={styles.thinText}>Vazão, nível, umidade, temperatura</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.block}>
          <View style={styles.layoutInRow}>
            <View style={styles.backgroundStatisticsIcon}>
              <Statistics width={vw(6)}/>
            </View>
            <View>
              <Text style={styles.normalText}>Substrato | Fechado</Text>
              <Text style={styles.thinText}>Vazão, nível, umidade, temperatura</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.block}>
          <View style={styles.layoutInRow}>
            <View style={styles.backgroundStatisticsIcon}>
              <Statistics width={vw(6)}/>
            </View>
            <View>
              <Text style={styles.normalText}>NFT</Text>
              <Text style={styles.thinText}>Nível, temperatura da solução</Text>
            </View>
          </View>
        </TouchableOpacity>
        

      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.text}>3</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}