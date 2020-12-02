import * as React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Tomato from '../../assets/icons/Tomato'
import Pump from '../../assets/icons/Pump'
import BottomBar from '../../assets/components/BottomBar'
import styles from './styles'
import TomatoBackground from '../../assets/images/TomatoBackground.png'

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={TomatoBackground} style={styles.tomatoBackground}/>
      <View style={styles.infoMenu}>
        <Tomato style={styles.tomatoIcon}/>
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