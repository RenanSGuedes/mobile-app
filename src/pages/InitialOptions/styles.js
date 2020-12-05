import { StyleSheet } from 'react-native'
import { vw, vh } from 'react-native-expo-viewport-units'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: vw(100),
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  white: {
    width: vw(50),
    height: vh(50),
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#F0F0F0'
  },
  blue: {
    width: vw(50),
    height: vh(50),
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#DAEBFF'
  }
})

export default styles