import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import styles from "../styles/addSubStyles";

const disableYellowBox = true;

const Number = (props) => {
const [value, setValue] = useState('?');
const [number, setNumber] = useState(props.number)

const answer = () => {
  setValue(
    numbers <= 10 ? 1 + numbers 
    : numbers <= 20 ? 2 + numbers - 10 
    : numbers <= 30 ? 3 + numbers - 20 
    : numbers <= 40 ? 4 + numbers - 30 
    : numbers <= 50 ? 5 + numbers - 40 
    : numbers <= 60 ? 6 + numbers - 50 
    : numbers <= 70 ? 7 + numbers - 60 
    : numbers <= 80 ? 8 + numbers - 70 
    : numbers <= 90 ? 9 + numbers - 80 
    : numbers <= 100 ? 10 + numbers - 90 
    : null
    );
};

let numberArray = number.number;
const numbers = numberArray

  return (
    <View style={styles.mainContainer}>
        <View style={styles.mainNumbersBox}>
          <View style={styles.questionBox}>
            <Text style={styles.numbersBox}>{
            numbers <= 10 ? <Text>1 + {numbers}</Text> 
            : numbers <= 20 ? <Text>2 + {numbers - 10}</Text> 
            : numbers <= 30 ? <Text>3 + {numbers - 20}</Text> 
            : numbers <= 40 ? <Text>4 + {numbers - 30}</Text> 
            : numbers <= 50 ? <Text>5 + {numbers - 40}</Text> 
            : numbers <= 60 ? <Text>6 + {numbers - 50}</Text> 
            : numbers <= 70 ? <Text>7 + {numbers - 60}</Text> 
            : numbers <= 80 ? <Text>8 + {numbers - 70}</Text> 
            : numbers <= 90 ? <Text>9 + {numbers - 80}</Text> 
            : numbers <= 100 ? <Text>10 + {numbers - 90}</Text> 
            : <Text>Great Job</Text>}</Text>
          </View>
          <View style={styles.equalsContainer}>
            <TouchableOpacity 
              onPress={answer}
              style={styles.button}>
                <Text style={styles.equalsText}>{numbers == 101 ? <Text style={{color: 'black'}} onPress={() => alert('Next Up is Subtraction')}>!!</Text> : <Text>=</Text>}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.answerBox}>
            <Text style={styles.answer}>{numbers == 101 ? <Text></Text> : value}</Text>
            <View>
              <Image></Image>
            </View>
          </View>
        </View>
    </View>
    )
}
export default Number