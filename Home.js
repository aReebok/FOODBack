import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

import styles from './style'


// const home_logo = Image.resolveAssetSource(require('./src/Home.jpg')).uri;

export default class Home extends Component {
    constructor (props) {
      super(props);
      this.state = {
        app_logo: 'https://i.imgur.com/dt5dJEI.png',
        app_icon: 'https://i.imgur.com/qlrJbhC.png',
        home: 'https://i.imgur.com/0X9HmIa.jpeg',
        cage: 'https://i.imgur.com/fYq5Hfx.png',
        stav: 'https://i.imgur.com/NeA5Yco.png',
      }
    }



    render() {
      return (
        <View style={styles.container}>
            <View style={styles.header1}></View>
            <View style={styles.header2}>
                <Image source = {{uri: this.state.app_logo}} style={{margin: 10, height: '100%', aspectRatio: 1.8,}} />
            </View>
            {/* <Text>{this.props.label}</Text>
            <Image source={{uri: this.state.stav}} style={{width: 100, height: 100}}/> */}
            <View style={styles.body}>

            </View>
            <View style={styles.nav}>

            </View>

        </View>
        

      );
    }

  }