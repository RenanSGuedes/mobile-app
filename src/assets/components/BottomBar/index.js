import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import styles from './styles'

export default function BottomBar() {
  return (
    <View style={container}>
      <TouchableOpacity style={touchable}>
        <Text style={text}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={touchable}>
        <Text style={text}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={touchable}>
        <Text style={text}>3</Text>
      </TouchableOpacity>
    </View>
  )
}

const container = StyleSheet.compose(styles.container)
const touchable = StyleSheet.compose(styles.touchable)
const text = StyleSheet.compose(styles.text)
