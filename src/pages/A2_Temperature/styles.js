import { StyleSheet } from 'react-native'
import { vw } from 'react-native-expo-viewport-units';
import Constants from 'expo-constants'
import handlePointer from '../../utils/handlePointer'

export const currentTemperature = 25

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: vw(100)
  },
  header: {
    flex: .7,
    paddingTop: Constants.statusBarHeight + 5,
    paddingLeft: vw(5),
    backgroundColor: '#F0F0F0'
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: vw(3.7),
    color: '#47566A',
  },
  normalText: {
    fontSize: vw(3.6),
    color: '#47566A'
  },
  pointerContainer: {
    flex: 6,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  pointerBackground: {
    position: 'relative',
    alignItems: 'center',
  },
  pointer: {
    position: 'absolute',
    marginTop: 50,
    transform: [{ rotateZ: `${handlePointer(0, 40, currentTemperature)}deg` }]
  },
  valueRead: {
    position: 'absolute',
    marginTop: 145,
    fontSize: vw(12),
    color: '#47566A',
  },
  parametersButtons: {
    flex: .8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  buttonsContainer: {
    flex: 1,
    backgroundColor: 'magenta',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#F0F0F0',
  },
  touchable: {
    width: vw(15),
    height: vw(15),
    borderRadius: vw(15)/2,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#DAEBFF'
  },
  text: {
    fontSize: vw(8),
    color: '#47566A',
  },
})

export default styles