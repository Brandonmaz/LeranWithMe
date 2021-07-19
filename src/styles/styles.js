import { StyleSheet, Dimensions} from 'react-native'
import items from "../screens/colorPicker";
import ColorsPage from "../components/colorsPage";


const styles = StyleSheet.create({
image: {
    flex: 1,
    resizeMode: 'cover',
},
homeButtonImage: {
    flex: 1,
    aspectRatio: .5, 
    resizeMode: 'contain',
},
individualItem: {
    flex: 1,
    borderRadius: 10,
    width: 275,
    height: 275,
    marginTop: 100,
    marginLeft: 65,
    borderWidth: 2,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: { width: -10, height: 12 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 24,
    zIndex: 1,
},
// itemContainer: {
//     justifyContent: 'flex-end',
//     borderRadius: 10,
//     borderColor: 'rgba(200, 200, 200, .5)',
//     borderWidth: 20,
//     padding: 10,
//     height: 550,
//     width: 400,
//     alignItems: 'center',
// },
itemName: {
    fontSize: 135,
    color: 'rgba(158, 158, 158, 0.8)',
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 75,
    marginLeft: 20,
    textShadowOffset: { width: -5, height: 4 },
    textShadowRadius: 1,
    textShadowColor: '#000',
},
// itemCode: {
//     fontWeight: '100',
//     fontSize: 12,
//     color: '#fff',
// },


homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
testing1main: {
    flex: 1,
    alignItems: "center",
    paddingTop: 60,
    borderColor: 'black',
    borderWidth: 2,
},
testing1: {
    marginTop: 50,
    marginBottom: -50,
},
testing1name: {
    // borderWidth: 1,
    // borderColor: 'black',
    fontWeight: "bold",
    color: 'rgb(100, 100, 100)',
    textAlign: "center",
    fontSize: 125,
    paddingBottom: 15,
    textShadowColor: 'grey',
    textShadowOffset: { width: 7, height: 5 },
    textShadowRadius: 10,
    shadowOpacity: 0.6,
    
},
testing2main: {
    // borderWidth: 1,
    // borderColor: 'black',
    flexDirection: 'row',
    alignItems: "center",
    padding: 10,
    marginTop: 125,
    justifyContent: 'space-between'
},
button: {
    marginBottom: 40,
    borderWidth: 2,
    borderColor: "black",
    width: 175,
    height: 80,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 7, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
},
homeButton: {
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
},

testing2name: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginTop: 15,
    },
});

export default styles;