import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from "../styles/numbersStyles";

const disableYellowBox = true;
const backArrow = require("../images/backArrow.png")
const forwardArrow = require('../images/forwardArrow.png')
const homeButton = require("../images/homeButton.png")


const Number = (props) => {
  const [number, setNumber] = useState(props.number)
  let numberArray = number.number;
  console.log(numberArray)
//   const newNumber = []
//   for(let i = 0; i < 3; i++) {
//       newNumber.push(numberArray[i].number)
//   }
//   console.log(newNumber)

// const numbers = newNumber
const numbers = numberArray

  return (
    <View style={styles.mainContainer}>
      <View style={styles.numbersContainer}>
      <TouchableOpacity
      title='upperCase' 
      style={[
          styles.button1
          ]} 
          onPress={() => {numbers[0] <= 100 ? alert(`Number... ${numbers[0]}`) : alert(`Good Job`)}}>
          <Text style={styles.numberBox}>{numbers[0] == 101 ? <Emoji name="smiley">Next</Emoji> : numbers[0]}</Text>
      </TouchableOpacity>
      <TouchableOpacity
      title='upperCase' 
      style={[
          styles.button1
          ]} 
          onPress={() => {numbers[1] <= 100 ? alert(`Number... ${numbers[1]}`) : alert(`Good Job`)}}>
          <Text style={styles.numberBox}>{numbers[1] == 101 ? <Emoji name="smiley">Next</Emoji> : numbers[1]}</Text>
      </TouchableOpacity>
      <TouchableOpacity
      title='upperCase' 
      style={[
          styles.button1
          ]} 
          onPress={() => {numbers[2] <= 100 ? alert(`Number... ${numbers[2]}`) : alert(`Good Job`)}}>
          <Text style={styles.numberBox}>{numbers[2] == 101 ? <Emoji name="smiley">Next</Emoji> : numbers[2]}</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.navBar}>
          <TouchableOpacity
            title="backward"
            onPress={() => alert("go back a page")}
          >
            <Image source={backArrow} style={numbers[0] == 1 ? {display: 'none'} : styles.arrow}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            title="home"
            onPress={() => alert("go to home page")}
          >
            {/* <Image source={homeButton} style={styles.arrow}></Image> */}
            <Icon  
              style={
                styles.arrow, 
                {
                  // shadowColor: 'black',
                  // shadowOpacity: 1,
                  // shadowRadius: 1,
                  // shadowOffset: {
                  //     width: 2,
                  //     height: 1,     
                  // },
                  opacity: 0.8,
                }} 
              name={'home-circle-outline'} size={70} color={'white'}/>
          </TouchableOpacity>
          <TouchableOpacity
            title="forward"
            onPress={() => alert("next page")}
          >
            <Image source={forwardArrow} style={numbers[2] == 100 ? {display: 'none'} : styles.arrow}></Image>
          </TouchableOpacity>
        </View>
    </View>
    )
}
export default Number