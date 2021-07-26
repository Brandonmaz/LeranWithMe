import React, {useState, useEffect} from 'react';
import { SafeAreaView, StatusBar, Image } from 'react-native';
import 'react-native-gesture-handler'
import Navigation from './src/navigation'
// import styles from './src/styles/styles.js';
import SplashScreen from 'react-native-splash-screen'
import LoadingTime from './src/navigation/loadingTime'

const landingImage = require('./src/images/landingPage.png')

export default class App extends React.Component {
  state = {
    loaded: false
  }
  constructor(){
    super()
    LoadingTime.load(v => this.setState({loaded: true}))
  }
  render(){
  return (
    <>
    <StatusBar barStyle="light-content" />
        <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      {this.state.loaded ? 
            <Navigation />
     : <Image source={landingImage} style={{width: '100%', height: '100%'}}></Image>}
    </SafeAreaView>
    </>
  );
};
}




// export default App

 {/* <Image source={landingImage} style={{width: '100%', height: '100%'}}></Image> */}