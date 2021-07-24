import { StyleSheet, Dimensions} from 'react-native'



const styles = StyleSheet.create({
colorsContainer: {
    width: Dimensions.get('window').width - 96,
    height: Dimensions.get('window').height - 55,
    // borderWidth: 2,
    // borderColor: 'blue',
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
    fontSize: 65,
    paddingBottom: 15,
    textShadowColor: 'silver',
    textShadowOffset: { width: 1, height: 3 },
    textShadowRadius: 10,
    shadowOpacity: 0.6,
    
},
mainColorsBox: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'blue',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
},
arrowContainer: {
    // borderWidth: 2,
    // borderColor: 'blue',
    right: '80%',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
        width: 4,
        height: 1,     
    },
},
colorContainer1: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: "yellow",
    position: 'absolute',
    right: '58%',
    alignItems: 'center',
    flexDirection: 'column',
},
colorContainer2: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: "red",
    position: 'absolute',
    right: '28%',
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