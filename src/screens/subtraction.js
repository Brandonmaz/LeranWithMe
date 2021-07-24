import React, {useState} from 'react';
import { StyleSheet,FlatList, View, Dimensions, Text, Pressable, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import Number from '../components/subtractionPage'
import numbers from '../../data/number'


const disableYellowBox = true;

const image = require("../images/backGround2.jpeg");

const Home = () => {
    return (
        <View>
            <FlatList 
                data={numbers}
                renderItem={({item}) => <Number number={item}/>} 
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