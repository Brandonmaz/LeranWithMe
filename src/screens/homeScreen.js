import React from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import styles from "../styles/styles.js";

const HomeScreen = ({ navigation }) => {
  
  return (
    <View style={styles.homeContainer}>
      {/* <Text style={{zIndex: 1, color: "red", marginTop: 20}}>Tap Cloud To Enter</Text> */}
      <TouchableOpacity 
        style={styles.homeButton}
        title="Color Choices"
        onPress={() => navigation.navigate('Color Matching')}
        >
          <Text>Color Picker</Text>
          {/* <Image style={styles.homeButtonImage, {borderColor: "white"}} source={buttonImage}/> */}
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.homeButton}
        title="Alphabet Choices"
        onPress={() => navigation.navigate('Pick A Letter')}
        >
          <Text>Alphabet Picker</Text>
          {/* <Image style={styles.homeButtonImage, {borderColor: "white"}} source={buttonImage}/> */}
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.homeButton}
        title="Number Choices"
        onPress={() => navigation.navigate('Pick A Number')}
        >
          <Text>Number Picker</Text>
          {/* <Image style={styles.homeButtonImage, {borderColor: "white"}} source={buttonImage}/> */}
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.homeButton}
        title="Number Choices"
        onPress={() => navigation.navigate('Addition')}
        >
          <Text>Addition</Text>
          {/* <Image style={styles.homeButtonImage, {borderColor: "white"}} source={buttonImage}/> */}
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.homeButton}
        title="Number Choices"
        onPress={() => navigation.navigate('Subtraction')}
        >
          <Text>Subtraction</Text>
          {/* <Image style={styles.homeButtonImage, {borderColor: "white"}} source={buttonImage}/> */}
        </TouchableOpacity>
    </View>
  );
}

export default HomeScreen