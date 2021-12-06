import React, { Component } from 'react';
import { Image, Text, View, ScrollView, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './home_features/styles'
import CafRating from './home_features/CafRating';
import HotAtCage from './home_features/HotAtCage';
import DrinkOfTheMonth from './home_features/DrinkOfTheMonth';
import NewItems from './home_features/NewItems';


export default class Home extends Component {
    constructor (props) {
      super(props);
      this.state = {
        app_logo: 'https://i.imgur.com/dt5dJEI.png',
        app_icon: 'https://i.imgur.com/qlrJbhC.png',
        home: 'https://i.imgur.com/0X9HmIa.jpeg',
        cage: 'https://i.imgur.com/fYq5Hfx.png',
        stav: 'https://i.imgur.com/NeA5Yco.png',
        url: 'http://10.42.231.225:3001',

        loaded_comments: ['HELLO'],
        fontLoaded: false
      }
    }
    

    handlePress = (op, method = '', params = {}) => {
      if (method != '')
          params.method = method;
      fetch(this.state.url + '/'+op, params)
          .then((response) => response.text())
          .then((responseText) => {
              alert(`
                  Sent:  op=${JSON.stringify(op)}\nparams+method=${
    JSON.stringify(params)}\n
                  Received:  ${responseText}`);
          })
          .catch((error) => {
              console.error(error);
          });
    }

    
    handlePressComments = (op, method = '', params = {}) => {
      if (method != '')
          params.method = method;
      fetch(this.state.url + '/'+op, params)
          .then((response) => response.text())
          .then((responseText) => {
            let comments = responseText.split('\"');  
            let len = comments.length;
            let arr = [];
            for (let i = 3; i <= len; i++) {
              arr.push(comments[i]);
              i += 3;
            }
            this.loaded_comments = arr;
            // alert(this.loaded_comments);
            this.props.navigation.navigate('CafComments');

          })
          .catch((error) => {
              console.error(error);
          });
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
                    {/* <Button
                        color='green' title='Click to see value of first User ID'
                        onPress={() => this.handlePress('firstUID', 'GET')} /> */}
                    <DrinkOfTheMonth/>       
                    <NewItems/>             
                </ScrollView>
                {/* <NavBar/> */}
            </View>

            <View style={styles.nav}>
              <Button title="🏠"
                onPress={() => this.props.navigation.navigate('Home')}/>
              {/* <Button title="💬"
                onPress={() => this.handlePressComments('comments','GET')}/> */}
                <Button title="💬"
                onPress={() => this.props.navigation.navigate('CafComments')}/>

            </View>
            
        </View>
        

      );
    }

  }