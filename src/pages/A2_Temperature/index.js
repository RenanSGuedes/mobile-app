import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import PointerBackground from '../../assets/svg_components/PointerBackground'
import Pointer from '../../assets/svg_components/Pointer'

import Temperature from '../../assets/icons/Temperature'
import Flow from '../../assets/icons/Flow'
import Humidity from '../../assets/icons/Humidity'
import SolutionHeight from '../../assets/icons/SolutionHeight'

export default function A2_Temperature() {
  return (
    <View>
    <View style={styles.header}>
      <Text style={styles.boldText}>Substrato - Fechado</Text>
      <Text style={styles.normalText}>Temperatura da solução</Text>
    </View>
    <View style={styles.container}>
      <View style={styles.pointerContainer}>
        <PointerBackground />
        <View style={{
          transform: [{ rotateZ: `${35}deg` }]
        }}>
          <Pointer />  
        </View> 
      </View>
      
      <View style={styles.parametersButtons}>
        <TouchableOpacity>
          <Temperature />
        </TouchableOpacity>
        <TouchableOpacity>
          <Flow />
        </TouchableOpacity>
        <TouchableOpacity>
          <Humidity />
        </TouchableOpacity>
        <TouchableOpacity>
          <SolutionHeight />
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
    </View>
  )
}