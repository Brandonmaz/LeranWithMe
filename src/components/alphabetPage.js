import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from "../styles/alphabetStyles";

const disableYellowBox = true;
const backArrow = require("../images/backArrow.png")
const forwardArrow = require('../images/forwardArrow.png')
const homeButton = require("../images/homeButton.png")


const Letter = (props) => {
  const [text, setLetter] = useState(props.text)
  let upperArray = text.upperCase;
  let lowerArray = text.lowerCase
  console.log(upperArray)
  // console.log(lowerArray)

const upper = upperArray[0]
const lower = lowerArray[0]
// console.log(upper + lower)

  return (
    <View style={styles.mainContainer}>
          <View style={styles.letterContainer}>
            <TouchableOpacity
              title='upperCase' 
              style={[
                styles.letterButton
                ]} 
                onPress={() => alert(`This is an Upper Case... ${upper[0]}`)}>
                <Text style={styles.letterBox}>{upper}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              title='upperCase' 
              style={[
                styles.letterButton
                ]} 
                onPress={() => alert(`This is a lower case... ${lower[0]}`)}>
                <Text style={styles.letterBox}>{lower}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.navBar}>
          <TouchableOpacity
            title="backward"
            onPress={() => alert("back")}
          >
            <Image source={backArrow} style={upper == 'A' ? {display: 'none'} : styles.arrow}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            title="home"
            onPress={() => alert("home")}
          >
            <Image source={homeButton} style={styles.homeButton}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            title="forward"
            onPress={() => alert("next")}
          >
            <Image source={forwardArrow} style={upper == 'Z' ? {display: 'none'} : styles.arrow}></Image>
          </TouchableOpacity>
        </View>
    </View>
    )
}
export default Letter