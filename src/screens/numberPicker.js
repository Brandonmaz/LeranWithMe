import React, {useState} from 'react';
import {FlatList, View } from 'react-native';
import Number from '../components/numbersPage'
import numbers from '../../data/numbers'


const disableYellowBox = true;

const image = require("../images/mainScreen.png");

const Home = () => {
    return (
        <View>
            <FlatList
                data={numbers}
                // style={{borderWidth: 5, borderColor: 'red'}}
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