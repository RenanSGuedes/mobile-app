import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import styles from './styles'

import About from '../../assets/icons/About'
import Login from '../../assets/icons/Login'
import FAQ from '../../assets/icons/FAQ'
import Upgrade from '../../assets/icons/Upgrade'

export default function InitialOptions() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.white}>
        <About />
      </TouchableOpacity>
      <TouchableOpacity style={styles.blue}>
        <Login />
      </TouchableOpacity >
      <TouchableOpacity style={styles.blue}>
        <FAQ />
      </TouchableOpacity>
      <TouchableOpacity style={styles.white}>
        <Upgrade />
      </TouchableOpacity>
    </View>
  )
}