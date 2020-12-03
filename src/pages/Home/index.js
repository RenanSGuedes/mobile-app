import * as React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Tomato from '../../assets/icons/Tomato'
import styles from './styles'
import TomatoBackground from '../../assets/images/TomatoBackground.png'
import Pump from '../../assets/icons/Pump'
import { vw } from 'react-native-expo-viewport-units'

export default function Home() {
  return (
    <View style={styles.container}>
      
      <Image source={TomatoBackground} style={styles.tomatoBackground}/>
      
      <View style={styles.infoMenu}>   
        <Tomato style={styles.tomato} width={vw(35)}/> 
        <Text style={styles.titleMenu}>Status</Text>

        <View style={styles.block}>
          <View style={styles.layoutInRow}>
            <View style={styles.backgroundPumpIcon}>
              <Pump width={vw(7)}/>
            </View>
            <View>
              <Text style={styles.normalText}>Bomba NFT</Text>
              <Text style={styles.thinText}>Desligado</Text>
            </View>
          </View>
          <View style={styles.NFTpumpStatusIndicator}/>
        </View>

        <View style={styles.block}>
          <View style={styles.layoutInRow}>
            <View style={styles.backgroundPumpIcon}>
              <Pump width={vw(7)}/>
            </View>
            <View>
              <Text style={styles.normalText}>Bomba | Substrato - Aberto</Text>
              <Text style={styles.thinText}>Ligado</Text>
            </View>
          </View>
          <View style={styles.pumpStatusIndicator}/>
        </View>

        <View style={styles.block}>

          <View style={styles.layoutInRow}>
            <View style={styles.backgroundPumpIcon}>
              <Pump width={vw(7)}/>
            </View>
            <View>
              <Text style={styles.normalText}>Bomba | Substrato - Fechado</Text>
              <Text style={styles.thinText}>Ligado</Text>
            </View>
          </View>
          <View style={styles.pumpStatusIndicator}/>
        </View>
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