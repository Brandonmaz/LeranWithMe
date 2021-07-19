import { StyleSheet, Dimensions} from 'react-native'


const styles = StyleSheet.create({
mainContainer: {
    flex: 1,
    width: Dimensions.get('window').width - 96,
    height: Dimensions.get('window').height - 90,
    borderWidth: 10,
    borderColor: 'black',
},
mainContainer1: {
    flex: 1,
    width:  Dimensions.get('window').height - 94.9,
    height: Dimensions.get('window').height,
    // borderBottomWidth: 10,
    // borderColor: 'black',
},
mainNumbersBox: {
    // borderWidth: 5,
    // borderColor: 'blue',
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    flexDirection: 'row',
},
mainColorsBox: {
    // borderWidth: 5,
    // borderColor: 'blue',
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    width: '50%',
    flexDirection: 'row',
},
numberContainer: {
    flexDirection: 'column',
},
numberBox: {
    fontWeight: "bold",
    fontSize: 110,
},
numbersBox: {
    // borderWidth: 2,
    // borderColor: 'blue',
    width: '100%',
    fontWeight: "bold",
    fontSize: 90,
},
answerBox: {
    // borderWidth: 5,
    // borderColor: "brown",
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 50,
},
answer: {
    fontWeight: "bold",
    fontSize: 100,
},
equalsText: {
    fontWeight: "bold",
    fontSize: 100,
},
button: {
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    marginLeft: 30,
    backgroundColor: "silver",
    padding: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 7, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
},
});

export default styles;