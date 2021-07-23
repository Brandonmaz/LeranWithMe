import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";
import styles from "../styles/numbersStyles";
import Emoji from 'react-native-emoji';

const disableYellowBox = true;



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
    <View style={styles.mainContainer1}>
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
    )
}
export default Number