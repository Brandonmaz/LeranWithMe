import { StyleSheet, Dimensions} from 'react-native'


const styles = StyleSheet.create({
mainContainer: {
    // flex: 1,
    width: Dimensions.get('window').width - 96,
    height: Dimensions.get('window').height - 54,
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
    fontSize: 90,
},
answerBox: {
    // borderWidth: 2,
    // borderColor: "brown",
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: 40,
},
answer: {
    fontWeight: "bold",
    fontSize: 100,
},
equalsContainer: {
    // borderWidth: 2,
    // borderColor: "black",
    padding: 15,
},
equalsText: {
    fontWeight: "bold",
    fontSize: 80,
},
button: {
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    marginLeft: 30,
    backgroundColor: "rgba(230,230,230,0.8)",
    padding: 10,
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
    opacity: 0.8
},
homeButton: {
    // borderWidth: 2,
    // borderColor: "black",
    width: 55,
    height: 55,
    opacity: 0.9
},
});

export default styles;