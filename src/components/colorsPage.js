import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import items from "../screens/colorPicker";
import styles from "../styles/colorStyles";


const Color = (props) => {
  const [color, setColor] = useState(props.color)
  let oldArray = color;
  let randomArr = color[0].arr
  console.log(oldArray)
  // console.log(randomArr)
  let array = [];
  let array2 = []
// for loop takes old array and pushes colors into array 
  for (let i = 0; i < oldArray.length; i++) {
    array.push(oldArray[i].code);
   for (let j = 0; j < randomArr.length; j++){
    array2.push(randomArr[j].code)
  }
}
// 0.5 will randomize the colors with Math.random // slice takes 6 random items out of the array 
  const random = array2.sort(() => 0.5 - Math.random()).slice(0, 14);

  const randomArray = []
  const mainColor = array[0]
  // console.log(random)
  randomArray.push(random , mainColor)

  return (
    <View style={styles.colorsContainer}>
        <View
          style={[
            styles.colorNameBox,
          ]}
        >
          <Text style={[styles.textBox, {color: mainColor}]}>{mainColor}</Text>
      </View>
      <View style={styles.mainColorsBox}>
          <View style={styles.colorContainer1}>
            <TouchableOpacity
              title="random1"
              style={[
                styles.colorButton,
                {backgroundColor: random[0]},
              ]}
              onPress={() => alert( random[0] == mainColor ? `Correct! Lets spell it together... ${mainColor}` : 'try another color')}
            >
            </TouchableOpacity>
            <TouchableOpacity
              title="random2"
              style={[
                styles.colorButton,
                {backgroundColor: random[1] },
              ]}
              onPress={() => alert(random[1] == mainColor ? `Correct! Lets spell it together... ${mainColor}` : 'try another color')}
            >
            </TouchableOpacity>
            <TouchableOpacity
              title="random3"
              style={[
                styles.colorButton,
                {backgroundColor: random[2]},
              ]}
              onPress={() => alert(random[2] == mainColor ? `Correct! Lets spell it together... ${mainColor}` : 'try another color')}
            >
            </TouchableOpacity>
          </View>
          <View style={styles.colorContainer2}>
            <TouchableOpacity
              title="random4"
              style={[
                styles.colorButton,
                {backgroundColor: random[3] },
              ]}
              onPress={() => alert(random[3] == mainColor ? `Correct! Lets spell it together... ${mainColor}` : 'try another color')}
            >
            </TouchableOpacity>
          <TouchableOpacity
            title="random5"
            style={[
              styles.colorButton,
              {backgroundColor: random[4]},
            ]}
            onPress={() => alert(random[4] == mainColor ? `Correct! Lets spell it together... ${mainColor}` : 'try another color')}
          >
          </TouchableOpacity>
          <TouchableOpacity
            title="random6"
            style={[
              styles.colorButton,
              {backgroundColor: random[0] == mainColor ? random[5] : random[1] == mainColor ? random[5] : random[2] == mainColor ? random[5] : random[3] == mainColor ? random[5] : random[4] == mainColor ? random[5] : mainColor},
            ]}
            onPress={() => alert(random[0] == mainColor || random[1] == mainColor || random[2] == mainColor || random[3] == mainColor || random[4] == mainColor ? 'try another color' : random[6] || random[7] || random[8] || random[9] || random[10] || random[11] || random[12] || random[13] == mainColor ? `Correct! Lets spell it together... ${mainColor}` : 'Not me')}
          >
          </TouchableOpacity>
          </View>
        </View>
      </View>
  );
}

export default Color