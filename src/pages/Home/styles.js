import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonsContainer: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#F0F0F0',
    position: 'absolute',
    bottom: 0
  },
  tomatoBackground: {
    flex: 1,
    opacity: .5
  },
  tomatoIcon: {
    position: "relative",
    top: -135/2,
    alignSelf: 'center'
  },
  infoMenu: {
    flex: 2,
    backgroundColor: '#F7F7F7'
  },
  touchable: {
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

export default styles