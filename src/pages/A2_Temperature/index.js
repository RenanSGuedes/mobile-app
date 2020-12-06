import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import PointerBackground from '../../assets/svg_components/PointerBackground'
import Pointer from '../../assets/svg_components/Pointer'
import Temperature from '../../assets/icons/Temperature'
import Flow from '../../assets/icons/Flow'
import Humidity from '../../assets/icons/Humidity'
import SolutionHeight from '../../assets/icons/SolutionHeight'
import { vw } from 'react-native-expo-viewport-units'
import { currentTemperature } from './styles'

export default function A2_Temperature() {

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.boldText}>Substrato - Fechado</Text>
        <Text style={styles.normalText}>Temperatura da solução</Text>
      </View>
      
      <View style={styles.pointerContainer}>
        <View style={styles.pointerBackground}>
          <PointerBackground width={vw(80)} />
        </View>
        <View style={styles.pointer}>
          <Pointer width={vw(55)}/>
        </View>
        <Text style={styles.valueRead}>{currentTemperature}°C</Text>
      </View>

      <View style={styles.parametersButtons}>
        <TouchableOpacity>
          <Temperature width={vw(5)}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Flow width={vw(8)}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Humidity width={vw(7)}/>
        </TouchableOpacity>
        <TouchableOpacity>
          <SolutionHeight height={vw(9)}/>
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