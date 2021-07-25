import { StyleSheet, Dimensions} from 'react-native'



const styles = StyleSheet.create({
mainContainer: {
    flex: 1,
    width: Dimensions.get('window').width - 96,
    height: Dimensions.get('window').height - 50,
    justifyContent: 'space-evenly',
    // borderWidth: 10,
    // borderColor: 'black',
},
letterBox: {
    // borderWidth: 2,
    // borderColor: 'blue',
    fontWeight: "bold",
    textAlign: 'center',
    fontSize: 100,
},
letterContainer: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: 'blue',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 50,
    flexDirection: 'row',
    
},
letterButton: {
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "rgb(225,225,225)",
    borderRadius: 10,
    minWidth: 175,
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