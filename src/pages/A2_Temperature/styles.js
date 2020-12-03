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
  pointerBackground: {
    position: 'relative',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  pointer: {
    position: 'absolute',
    left: 53,
    bottom: -122,
    borderRadius: 122,
    shadowRadius: 50,
    transform: [{ rotateZ: `${Math.floor(Math.random() * 100)}deg` }],

    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },
  valueText: {
    position: "absolute",
    fontSize: 30,
    zIndex: 2
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