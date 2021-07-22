import { StyleSheet, Dimensions} from 'react-native'


const styles = StyleSheet.create({
mainContainer: {
    // flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    // borderWidth: 10,
    // borderColor: 'black',
},
mainContainer1: {
    flex: 1,
    width:  '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    marginHorizontal: 23.5,
    // borderWidth: 1,
    // borderColor: 'green',
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
numberContainer: {
    // flex: 1,
    // flexDirection: 'row',
    borderWidth: 5,
    borderColor: "yellow",
    // alignSelf: 'center',
    // alignItems: 'center',
    
},
numberBox: {
    fontWeight: "bold",
    textAlign: 'center',
    fontSize: 100,
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
button1: {
    borderWidth: 2,
    borderColor: "black",
    // alignItems: "center",
    // marginHorizontal: 32,
    backgroundColor: "rgb(225,225,225)",
    // paddingHorizontal: 20,
    borderRadius: 10,
    minWidth: 175,
    shadowColor: 'black',
    shadowOffset: { width: 7, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
},
});

export default styles;