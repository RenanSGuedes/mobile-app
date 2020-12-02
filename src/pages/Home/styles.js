import { StyleSheet } from 'react-native'

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

export default styles