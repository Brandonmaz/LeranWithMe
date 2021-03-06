import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from "../styles/colorStyles";


const backArrow = require("../images/backArrow.png")
const forwardArrow = require('../images/forwardArrow.png')
const homeButton = require("../images/homeButton.png")

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
        <View style={styles.navBar}>
          <TouchableOpacity
            title="backward"
            onPress={() => alert("go back a page")}
          >
            <Image source={backArrow} style={mainColor == 'red' ? {display: 'none'} : styles.arrow}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            title="home"
            onPress={() => alert("go to home page")}
          >
            <Image source={homeButton} style={styles.homeButton}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            title="forward"
            onPress={() => alert("next page")}
          >
            <Image source={forwardArrow} style={mainColor == 'turquoise' ? {display: 'none'} : styles.arrow}></Image>
          </TouchableOpacity>
        </View>
      </View>
  );
}

export default Color