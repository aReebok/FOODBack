import React, { Component } from 'react';
import { Image, Text, View, ScrollView, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './home_features/styles'
import CafRating from './home_features/CafRating';
import HotAtCage from './home_features/HotAtCage';
import DrinkOfTheMonth from './home_features/DrinkOfTheMonth';
import NewItems from './home_features/NewItems';

// import NavBar from '../NavBar';


export default class Home extends Component {
    constructor (props) {
      super(props);
      this.state = {
        app_logo: 'https://i.imgur.com/dt5dJEI.png',
        app_icon: 'https://i.imgur.com/qlrJbhC.png',
        home: 'https://i.imgur.com/0X9HmIa.jpeg',
        cage: 'https://i.imgur.com/fYq5Hfx.png',
        stav: 'https://i.imgur.com/NeA5Yco.png',

        fontLoaded: false
      }
    }

    render() {
      return (
        <View style={styles.container}>
            <View style={styles.header1}></View>

            <View style={styles.header2}>
                <Image source = {{uri: this.state.app_logo}} style={{margin: 10, height: '100%', aspectRatio: 1.8,}} />
            </View>
      
            <View style={styles.body}>
                <ScrollView style={styles.scrollView}>
                    <CafRating/>
                    <HotAtCage/>
                    <DrinkOfTheMonth/>       
                    <NewItems/>             
                </ScrollView>
                {/* <NavBar/> */}
            </View>
            
        </View>
        

      );
    }

  }