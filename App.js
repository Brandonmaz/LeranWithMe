import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import 'react-native-gesture-handler'
import Navigation from './src/navigation'
import { BrowserRouter as Router, Route, } from "react-router-dom";

const App = () => {
  return (
    <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
            <Navigation />
        </SafeAreaView>
    </>
  );
};



export default App
