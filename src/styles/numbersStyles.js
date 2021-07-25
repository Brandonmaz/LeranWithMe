import { StyleSheet, Dimensions} from 'react-native'


const styles = StyleSheet.create({
mainContainer: {
    // flex: 1,
    width: Dimensions.get('screen').width - 96,
    height: Dimensions.get('screen').height,
    // borderWidth: 5,
    // borderColor: 'green',
},
numbersContainer: {
    flex: 1,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    // marginHorizontal: 100,
    flexDirection: 'row',
    // borderWidth: 2,
    // borderColor: 'blue',
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
    borderColor: "black",
    // alignItems: "center",
    marginHorizontal: 32,
    backgroundColor: "rgb(225,225,225)",
    paddingHorizontal: 20,
    borderRadius: 10,
    minWidth: 150,
    shadowColor: 'black',
    shadowOffset: { width: 7, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
},
});

export default styles;