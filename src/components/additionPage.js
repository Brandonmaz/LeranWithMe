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
  setValue(1 + numbers <= 10 ? 1 + numbers : numbers >= 10 ? 2 + numbers - 9 : 3 + numbers);
};
const answer2 = () => {
  setValue(2 + numbers)
}
let numberArray = number.number;
const numbers = numberArray

  return (
    <View style={styles.mainContainer}>
        <View style={styles.mainColorsBox}>
          <View style={styles.questionBox}>
            <Text style={styles.numbersBox}>{numbers <= 9 ? <Text>1 + {numbers}</Text> : numbers >= 10 ? <Text>2 + {numbers - 9}</Text> : numbers <= 11 ? <Text>3 + {numbers - 10}</Text> : <Text>1 + {numbers}</Text>}</Text>
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