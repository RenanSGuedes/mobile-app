import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    marginTop: 35
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#47566A',
  },
  normalText: {
    fontSize: 17,
    color: '#47566A'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  pointerContainer: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: 1
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
  parametersButtons: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
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
    fontSize: 36,
    color: '#47566A',
  },
})

export default styles