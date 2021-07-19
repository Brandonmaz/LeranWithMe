import React, {useState} from 'react';
import { StyleSheet,FlatList, View, Dimensions, Text, Pressable, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import Color from '../components/colorsPage'
import colors from '../../data/colors'


const disableYellowBox = true;

const image = require("../images/backGround2.jpeg");

const Home = () => {
    return (
        <View>
            <FlatList 
                data={colors}
                renderItem={({item}) => <Color color={item}/>}
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