import { StyleSheet } from 'react-native'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  header: {
    flex: .7,
    paddingTop: Constants.statusBarHeight + 5,
    paddingLeft: vw(5),
    backgroundColor: 'red'
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
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  pointerBackground: {
    backgroundColor: 'yellow',
    alignItems: 'center',
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