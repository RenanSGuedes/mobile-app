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
    backgroundColor: '#F7F7F7',
    padding: 20
  },
  backgroundPumpIcon: {
    backgroundColor: '#DAEBFF',
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 45/2,
    marginRight: 6
  },
  titleMenu: {
    color: '#47566A',
    fontSize: 20,
    paddingBottom: 35
  },
  normalText: {
    fontSize: 17,
    color: '#47566A'
  },
  thinText: {
    fontWeight: 'normal',
    fontSize: 13,
    color: '#47566A'
  },
  layoutInRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  touchable: {
    width: 75,
    height: 75,
    borderRadius: 75/2,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#DAEBFF'
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25
  },
  pumpStatusIndicator: {
    width: 80,
    height: 35,
    backgroundColor: '#DAEBFF',
    borderRadius: 20
  },
  NFTpumpStatusIndicator: {
    width: 80,
    height: 35,
    backgroundColor: '#FAA8A2',
    borderRadius: 20
  },
  text: {
    fontSize: 36,
    color: '#47566A',
  }
})

export default styles