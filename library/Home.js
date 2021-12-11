import React, { Component, useEffect, useState } from 'react';
import { Image, Text, View, ScrollView, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './home_features/styles'
import CafRating from './home_features/CafRating';
import HotAtCage from './home_features/HotAtCage';
import DrinkOfTheMonth from './home_features/DrinkOfTheMonth';
import NewItems from './home_features/NewItems';
import CafFlirts from './CafFlirts'


function Home (props) {
    // constructor (props) {
    //   super(props);
    //   this.state = {
    //     app_logo: 'https://i.imgur.com/dt5dJEI.png',
    //     app_icon: 'https://i.imgur.com/qlrJbhC.png',
    //     home: 'https://i.imgur.com/0X9HmIa.jpeg',
    //     cage: 'https://i.imgur.com/fYq5Hfx.png',
    //     stav: 'https://i.imgur.com/NeA5Yco.png',
    //     url: 'http://10.42.231.225:3001',

    //     loaded_comments: ['HELLO'],
    //     hot_at_cage_food: '**** here is hot cage foods',
    //     //user info
    //     uid: 0,

    //   }
    // }

    let app_logo = 'https://i.imgur.com/dt5dJEI.png';
    let app_icon = 'https://i.imgur.com/qlrJbhC.png';
    let url =  'http://10.42.231.225:3001';
    let loaded_comments = ['HELLO'];
    let hot_at_cage_food = '**** here is hot cage foods'; // MAKE THIS STATE VAR
    let uid = 0;

    

    const handlePressGetHot = (op, method = '', params = {}) => {
      if (method != '')
          params.method = method;
      fetch(url + '/'+op, params)
          .then((response) => response.json())
          .then((responseText) => {
            // this.setState({hot_at_cage_food: `${responseText[0].item}`}); // hot_at_cage_food = responseText
            hot_at_cage_food = `${responseText[0].item}`;
            console.log(hot_at_cage_food);
          })
          .catch((error) => {
              console.error(error);
          });
    }

    const [pGreen, setPGreen] = useState('██████');
    const [pRed, setPRed] = useState('██████');

    const handleGetCafRating = (op, method = '', params = {}) => {
      if (method != '')
          params.method = method;
      fetch(url + '/'+op, params)
          .then((response) => response.json())
          .then((responseText) => {
            setPGreen(0);
            setPRed(0);
            let nGreen = parseInt(`${responseText.name_val[0].split("|")[1]}`);
            let nRed = parseInt(`${responseText.name_val[1].split("|")[1]}`);
            let n = nGreen+nRed;
            let green = Math.round((12*nGreen)/(nGreen+nRed));
            let red = Math.round((12*nRed)/(nGreen+nRed));
            // setPRed(12-pGreen);
            console.log('green: ' + green + ' | red: ' + red)
          })
          .catch((error) => {
              console.error(error);
          });
    }

    useEffect(() => {
      handleGetCafRating('green/red','GET');
  }, []);
      return (
        <View style={styles.container}>
            <View style={styles.header1}></View>

            <View style={styles.header2}>
                <Image source = {{uri: app_logo}} style={{margin: 10, height: '100%', aspectRatio: 1.8,}} />
            </View>
      
            <View style={styles.body}>
                <ScrollView style={styles.scrollView}>
                    <CafRating p_green = {pGreen} p_red ={pRed}/>
                    <HotAtCage/>
                    <Text>
                      {hot_at_cage_food}
                    </Text>
                    <Button
                        color='green' title='Click to see the first 3 foods'
                        onPress={() => handlePressGetHot('hot_at_cage', 'GET')} />
                    <DrinkOfTheMonth/>       
                    <NewItems/>             
                </ScrollView>
                {/* <NavBar/> */}
            </View>

            <View style={styles.nav}>
              <Button title="🏠"
                onPress={() => props.navigation.navigate('Home')}/>
              {/* <Button title="💬"
                onPress={() => this.handlePressComments('comments','GET')}/> */}
                <Button title="💬"
                onPress={() => props.navigation.navigate({name: 'CafComments', params:{text_hello: 'Caf Comments'}})}/>

              <Button title="🖤"
                onPress={() => props.navigation.navigate('CafFlirts')}/>
            </View>
            
        </View>
        

      );
  }

  export default Home;