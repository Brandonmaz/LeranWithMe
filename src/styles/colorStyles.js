import { StyleSheet, Dimensions} from 'react-native'



const styles = StyleSheet.create({
colorsContainer: {
    flex: 1,
    // width: '100%',
    // width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    width: 670,
    // borderWidth: 10,
    // borderColor: 'black',
},
textBox: {
    fontWeight: "bold",
    color: 'rgb(100, 100, 100)',
    textAlign: "center",
    fontSize: 60,
    paddingBottom: 15,
    textShadowColor: 'silver',
    textShadowOffset: { width: 1, height: 3 },
    textShadowRadius: 10,
    shadowOpacity: 0.6,
    
},
mainColorsBox: {
    flex: 1,
    // borderWidth: 5,
    // borderColor: 'blue',
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
},
colorContainer1: {
    flex: 1,
    // borderWidth: 5,
    // borderColor: "yellow",
    position: 'absolute',
    right: '57%',
    alignItems: 'center',
    flexDirection: 'column',
},
colorContainer2: {
    flex: 1,
    // borderWidth: 5,
    // borderColor: "brown",
    position: 'absolute',
    right: '30%',
    alignItems: 'center',
    flexDirection: 'column',
},
colorButton: {
    flex: 1,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: "black",
    width: 100,
    height: 50,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 7, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
},
});

export default styles;