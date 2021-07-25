import { StyleSheet, Dimensions} from 'react-native'


const styles = StyleSheet.create({
mainContainer: {
    // flex: 1,
    width: Dimensions.get('window').width - 96,
    height: Dimensions.get('window').height,
    // borderWidth: 10,
    // borderColor: 'black',
},
mainNumbersBox: {
    // borderWidth: 5,
    // borderColor: 'blue',
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
},
numbersBox: {
    // borderWidth: 2,
    // borderColor: 'yellow',
    // width: '100%',
    fontWeight: "bold",
    padding: 10,
    fontSize: 90,
},
answerBox: {
    // borderWidth: 2,
    // borderColor: "brown",
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