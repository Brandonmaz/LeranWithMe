import { StyleSheet, Dimensions} from 'react-native'


const styles = StyleSheet.create({
mainContainer: {
    width: Dimensions.get('window').width - 96,
    height: Dimensions.get('window').height - 54,
    // borderWidth: 5,
    // borderColor: 'green',
},
numbersContainer: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: 'blue',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 50,
    flexDirection: 'row',
},
arrowContainer: {
    // borderWidth: 2,
    // borderColor: 'blue',
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
        width: 4,
        height: 1,     
    },
},
numberBox: {
    fontWeight: "bold",
    textAlign: 'center',
    fontSize: 75,
},
button1: {
    borderWidth: 2,
    // alignItems: "center",
    marginHorizontal: 32,
    borderColor: "rgba(0,0,0,0.2)",
    backgroundColor: "rgba(225,225,225, 0.7)",
    paddingHorizontal: 20,
    borderRadius: 10,
    minWidth: 150,
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
    opacity: 0.9,
},
});

export default styles;