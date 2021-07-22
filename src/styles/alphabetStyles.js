import { StyleSheet, Dimensions} from 'react-native'



const styles = StyleSheet.create({
mainContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-evenly',
    marginHorizontal: 95,
    // borderWidth: 10,
    // borderColor: 'black',
},
letterBox: {
    // borderWidth: 2,
    // borderColor: 'blue',
    fontWeight: "bold",
    textAlign: 'center',
    fontSize: 150,
},
letterContainer1: {
    // flex: 1,
    // borderWidth: 5,
    // borderColor: "yellow",
    flexDirection: 'row',
    alignSelf: 'center',
},
letterButton: {
     borderWidth: 2,
    borderColor: "black",
    marginHorizontal: 32,
    backgroundColor: "rgb(225,225,225)",
    borderRadius: 10,
    minWidth: 175,
    shadowColor: 'black',
    shadowOffset: { width: 7, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
},
});

export default styles;