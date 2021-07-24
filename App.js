import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import 'react-native-gesture-handler'
import Navigation from './src/navigation'
// import {library} from '@fortawesome/fontawesome-svg-core'
// import {fab} from "@fortawesome/free-brands-svg-icons";
// import {faAnglesRight, faAnglesLeft} from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faAnglesRight, faAnglesLeft)

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
