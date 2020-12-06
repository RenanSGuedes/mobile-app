import * as React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import YPointerBackground from '../../assets/svg_components/YPointerBackground'
import Temperature from '../../assets/icons/Temperature'
import Flow from '../../assets/icons/Flow'
import Humidity from '../../assets/icons/Humidity'
import SolutionHeight from '../../assets/icons/SolutionHeight'
import { vw } from 'react-native-expo-viewport-units'
import { currentLevel } from './styles'

export default function B2_Level() {

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.boldText}>Substrato | Aberto</Text>
        <Text style={styles.normalText}>Nível da solução no reservatório</Text>
      </View>
      
      <View style={styles.pointerContainer}>
        <View style={styles.pointerBackground}>
          <YPointerBackground width={vw(80)} />
        </View>
        <Text style={styles.valueRead}>{currentLevel}cm</Text>
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