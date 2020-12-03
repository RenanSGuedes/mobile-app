import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import PointerBackground from '../../assets/svg_components/PointerBackground'
import Pointer from '../../assets/svg_components/Pointer'

export default function A2_Temperature() {
  return (
    <View style={styles.container}>
      <View style={styles.pointerContainer}>
        <PointerBackground />
        <Pointer />
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