import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/numbersStyles";
import Emoji from 'react-native-emoji';

const disableYellowBox = true;



const Number = (props) => {
  const [number, setNumber] = useState(props.number)
  let numberArray = number.number;
  console.log(numberArray)

const numbers = numberArray

  return (
    <View style={styles.mainContainer1}>

            <TouchableOpacity
            title='upperCase' 
            style={[
                styles.button1
                ]} 
                onPress={() => {numbers <= 100 ? alert(`Number... ${numbers}`) : alert(`Good Job`)}}>
                <Text style={styles.numberBox}>{numbers == 101 ? <Emoji name="smiley">Next</Emoji> : numbers}</Text>
            </TouchableOpacity>
    </View>
    )
}
export default Number