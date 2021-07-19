import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/numbersStyles";

const disableYellowBox = true;



const Number = (props) => {
const [value, setValue] = useState('?');
const [number, setNumber] = useState(props.number)

const answer = () => {
  setValue(numbers - 1);
};
let numberArray = number.number;
console.log(numberArray)

const numbers = numberArray

  return (
    <View style={styles.mainContainer}>
        <View style={styles.mainColorsBox}>
          <View style={styles.questionBox}>
            <Text style={styles.numbersBox}>{numbers} - 1</Text>
          </View>
          <View>
            <TouchableOpacity 
              onPress={answer}
              style={styles.button}>
                <Text style={styles.equalsText}>=</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.answerBox}>
            <Text style={styles.answer}>{value}</Text>
          </View>
        </View>
    </View>
    )
}
export default Number