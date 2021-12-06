import React from 'react'
import {View, Text} from 'react-native'
import Carousel from '../component/Carousel'
import { dummyData } from '../data/Data'


const HomeC = ({navigation}) =>{
    return (
        <View>
            <Carousel data = {dummyData}/>
        </View>
    )
}

export default HomeC