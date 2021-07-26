import { StyleSheet, Dimensions} from 'react-native'



const styles = StyleSheet.create({
colorsContainer: {
    width: Dimensions.get('window').width - 96,
    height: Dimensions.get('window').height - 54,
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
    opacity: 0.8,
    textAlign: "center",
    fontSize: 55,
    paddingBottom: 15,
    textShadowColor: 'silver',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    shadowOpacity: 0.6,
},
mainColorsBox: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: 'blue',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
},
colorContainer1: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: "yellow",
    // position: 'absolute',
    // right: '64%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
},
colorContainer2: {
    // flex: 1,
    // borderWidth: 2,
    // borderColor: "red",
    flexDirection: 'row',
},
colorButton: {
    marginBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    padding: 40,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.6,
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
    opacity: 0.8,
},
homeButton: {
    // borderWidth: 2,
    // borderColor: "black",
    width: 55,
    height: 55,
    opacity: 0.9,
},
});

export default styles;