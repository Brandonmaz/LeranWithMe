import * as React from 'react';
import { ImageBackground } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ColorPicker from '../screens/colorPicker'
import AlphabetPicker from '../screens/alphabetPicker'
import NumbersPicker from '../screens/numberPicker'
import Addition from '../screens/addition'
import Subtraction from '../screens/subtraction'
import styles from '../styles/styles.js'
import HomeScreen from '../screens/homeScreen';

const homeImage = require("../images/backGround3.jpeg");

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <ImageBackground source={homeImage} style={styles.image}>
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor: 'black'}, headerTintColor: 'aquamarine', headerTitleStyle:{fontWeight: 'bold'},}} >
        {/* <Stack.Navigator screenOptions={{headerShown: false}}> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Color Matching" component={ColorPicker} />
        <Stack.Screen name="Pick A Letter" component={AlphabetPicker} />
        <Stack.Screen name="Pick A Number" component={NumbersPicker} />
        <Stack.Screen name="Addition" component={Addition} />
        <Stack.Screen name="Subtraction" component={Subtraction} />
      </Stack.Navigator>
    </NavigationContainer>
    </ImageBackground>
  );
}

export default RootNavigation;