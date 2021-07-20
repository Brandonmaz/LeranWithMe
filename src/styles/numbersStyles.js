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
    width:  Dimensions.get('window').height - 96,
    height: Dimensions.get('window').height - 90,
    borderBottomWidth: 10,
    borderColor: 'black',
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
    width: '85%',
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
    // borderColor: 'yellow',
    width: '100%',
    height: '85%',
    fontWeight: "bold",
    padding: 10,
    fontSize: 90,
},
answerBox: {
    // borderWidth: 2,
    // borderColor: "brown",
    height: '90%',
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    marginLeft: 40,
},
answer: {
    fontWeight: "bold",
    fontSize: 100,
},
equalsContainer: {
    // borderWidth: 2,
    // borderColor: "black",
    padding: 10,
    height: '100%',
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
button1: {
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    // marginLeft: 30,
    backgroundColor: "silver",
    // padding: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 7, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
},
});

export default styles;