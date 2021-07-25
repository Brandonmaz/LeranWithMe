import { StyleSheet, Dimensions} from 'react-native'



const styles = StyleSheet.create({
colorsContainer: {
    width: Dimensions.get('window').width - 96,
    height: Dimensions.get('window').height - 50,
    // borderWidth: 2,
    // borderColor: 'green',
},
colorNameBox: {
    // flex: 1,
    // borderWidth: 2,
    // borderColor: 'red',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
},
textBox: {
    fontWeight: "bold",
    color: 'rgb(100, 100, 100)',
    textAlign: "center",
    fontSize: 55,
    paddingBottom: 15,
    textShadowColor: 'silver',
    textShadowOffset: { width: 1, height: 3 },
    textShadowRadius: 10,
    shadowOpacity: 0.6,
    
},
mainColorsBox: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: 'blue',

},
colorContainer1: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: "yellow",
    height: '100%',
    position: 'absolute',
    right: '64%',
    alignItems: 'center',
    flexDirection: 'column',
},
colorContainer2: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: "red",
    height: '100%',
    position: 'absolute',
    right: '24%',
    alignItems: 'center',
    flexDirection: 'column',
},
colorButton: {
    flex: 1,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    padding: 30,
    width: 100,
    // height: 50,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 7, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
},
navBar: {
    // borderWidth: 2,
    // borderColor: "black",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
},
arrow: {
    // borderWidth: 2,
    // borderColor: "black",
    width: 50,
    height: 50,
},
});

export default styles;