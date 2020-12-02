import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, PixelRatio } from 'react-native'

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

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#F0F0F0',
    position: 'absolute',
    bottom: 0
  },
  touchable: {
    backgroundColor: 'red',
    width: 75,
    height: 75,
    borderRadius: 75/2,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#DAEBFF'
  },
  text: {
    fontSize: 36
  }
})

const container = StyleSheet.compose(styles.container)
const touchable = StyleSheet.compose(styles.touchable)
const text = StyleSheet.compose(styles.text)