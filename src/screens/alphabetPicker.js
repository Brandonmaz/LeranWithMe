import React, {useState} from 'react';
import { StyleSheet,FlatList, View, Dimensions, Text, Pressable, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import Letter from '../components/alphabetPage'
import alphabet from '../../data/alphabet'


const disableYellowBox = true;

const image = require("../images/mainScreen.png");

const Home = () => {
    return (
        <View>
            <FlatList 
                data={alphabet}
                renderItem={({item}) => <Letter text={item}/>} 
                pagingEnabled={true}
                horizontal={true}
                // showsHorizontalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
            />
        </View>
        
    )
}

export default Home