import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/alphabetStyles";

const disableYellowBox = true;

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
      {/* <View
          style={[
            styles.lettersBox,
          ]}
        > 
          <Text style={[styles.textBox, {color: 'red'}]}>{upper}</Text>
          <Text style={[styles.textBox, {color: 'red'}]}>{lower}</Text>
        </View> */}
        <View style={styles.mainColorsBox}>
          <View style={styles.letterContainer1}>
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
          {/* <View style={styles.letterContainer2}>
            <TouchableOpacity
              title='upperCase' 
              style={[
                styles.letterButton
                ]} 
                onPress={() => alert(`The Letter is... ${lower[0]}`)}>
                <Text style={styles.letterBox}>{lower}</Text>
            </TouchableOpacity>
          </View> */}
        </View>
    </View>
    )
}
export default Letter