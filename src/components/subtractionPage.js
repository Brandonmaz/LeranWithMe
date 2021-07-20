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
  setValue(
    numbers <= 10 ? numbers - 1 
    : numbers <= 20 ? numbers - 2 - 9 
    : numbers <= 30 ? numbers - 3 - 18 
    : numbers <= 40 ? numbers - 4 - 27 
    : numbers <= 50 ? numbers - 5 - 36 
    : numbers <= 60 ? numbers - 6 - 45 
    : numbers <= 70 ? numbers - 7 - 54 
    : numbers <= 80 ? numbers - 8 - 63 
    : numbers <= 90 ? numbers - 9 - 72 
    : numbers <= 100 ? numbers - 10 - 81 
    : null
    );
};

let numberArray = number.number;
const numbers = numberArray

  return (
    <View style={styles.mainContainer}>
        <View style={styles.mainColorsBox}>
          <View style={styles.questionBox}>
            <Text style={styles.numbersBox}>{
            numbers <= 10 ? <Text>{numbers} - 1</Text> 
            : numbers <= 20 ? <Text>{numbers - 9} - 2</Text> 
            : numbers <= 30 ? <Text>{numbers - 18} - 3</Text> 
            : numbers <= 40 ? <Text>{numbers - 27} - 4</Text> 
            : numbers <= 50 ? <Text>{numbers - 36} - 5</Text> 
            : numbers <= 60 ? <Text>{numbers - 45} - 6</Text> 
            : numbers <= 70 ? <Text>{numbers - 54} - 7</Text> 
            : numbers <= 80 ? <Text>{numbers - 63} - 8</Text> 
            : numbers <= 90 ? <Text>{numbers - 72} - 9</Text> 
            : numbers <= 100 ? <Text>{numbers - 81} - 10</Text> 
            : <Text>Great Job</Text>}</Text>
          </View>
          <View>
            <TouchableOpacity 
              // onPress={answer}
              onPress={numbers <= 100 ? alert('Next up is Subtraction') : answer}
              style={styles.button}>
                <Text style={styles.equalsText}>{numbers == 101 ? <Text style={{color: 'black'}}>!!</Text> : <Text>=</Text>}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.answerBox}>
            <Text style={styles.answer}>{numbers == 101 ? <Text></Text> : value}</Text>
          </View>
        </View>
    </View>
    )
}
export default Number