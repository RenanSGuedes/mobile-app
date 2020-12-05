import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function NFT_ListPlot() {
  return (
    <View style={styles.container}>
      <View style={styles.infoMenu}>

        <Text style={styles.titleMenu}>NFT</Text>
        
        <TouchableOpacity style={styles.block}>
          <View style={styles.layoutInRow}>
            <View>
              <Text style={styles.normalText}>Temperatura da solução</Text>
              <Text style={styles.thinText}>Consulte o gráfico da vazão em função do tempo</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.block}>
          <View style={styles.layoutInRow}>
            <View>
              <Text style={styles.normalText}>Nível do reservatório</Text>
              <Text style={styles.thinText}>Consulte o gráfico do nível em função do tempo</Text>
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