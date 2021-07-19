import React, { useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/numbersStyles";

const disableYellowBox = true;

const Number = (props) => {
  const [number, setNumber] = useState(props.number)
  let numberArray = number.number;
  console.log(numberArray)

const numbers = numberArray

  return (
    <View style={styles.mainContainer1}>
        <View style={styles.mainNumbersBox}>
        <View style={styles.numberContainer}>
            <TouchableOpacity
            title='upperCase' 
            style={[
                styles.button
                ]} 
                onPress={() => alert(`Number... ${numbers}`)}>
                <Text style={styles.numberBox}>{numbers}</Text>
            </TouchableOpacity>
            </View>
        </View>
    </View>
    )
}
export default Number