import { StyleSheet, Dimensions} from 'react-native'



const styles = StyleSheet.create({
mainContainer: {
    flex: 1,
    width: Dimensions.get('window').width - 96,
    height: Dimensions.get('window').height - 90,
    borderWidth: 10,
    borderColor: 'black',
},
// lettersBox: { 
//     borderWidth: 2,
//     borderColor: 'red',
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     textAlign: 'center',
// },
// textBox: {
//     borderWidth: 2,
//     borderColor: 'yellow',
//     width: '50%',
//     fontWeight: "bold",
//     color: 'rgb(100, 100, 100)',
//     textAlign: "center",
//     fontSize: 60,
//     paddingBottom: 15,
//     textShadowColor: 'silver',
//     textShadowOffset: { width: 1, height: 3 },
//     textShadowRadius: 10,
//     shadowOpacity: 0.6,
// },
letterBox: {
    // borderWidth: 2,
    // borderColor: 'blue',
    fontWeight: "bold",
    // color: 'rgb(100, 100, 100)',
    textAlign: "center",
    fontSize: 150,
    // paddingBottom: 15,
    // textShadowColor: 'silver',
    // textShadowOffset: { width: 1, height: 3 },
    // textShadowRadius: 10,
    // shadowOpacity: 0.6,
},
mainColorsBox: {
    // borderWidth: 5,
    // borderColor: 'blue',
    flex: 1,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
},
letterContainer1: {
    flex: 1,
    // borderWidth: 5,
    // borderColor: "yellow",
    width: '50%',
    flexDirection: 'row',
    alignSelf: 'center',
},
letterContainer2: {
    flex: 1,
    // borderWidth: 5,
    // borderColor: "brown",
    width: '50%',
    flexDirection: 'column',
},
letterButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: "yellow",
},
});

export default styles;