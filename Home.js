import React, { Component } from 'react';
import { Image, Text, View, ScrollView, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './style'
import CafRating from './CafRating';



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
                    <VerticleLine/> 
                                        

                    

                    <View style={styles.section}>
                        <Text style={{fontSize: 30, }}> HOT 🔥 @ CAGE </Text>
                        
                        <Text style={{fontWeight: 'bold',}}>     DRINKS </Text>
                        <Text >{'\t'}🔥 Mango Lemonade </Text>
                        <Text >{'\t'}🔥 Iced Latte </Text>
                        <Text >{'\t'}🔥 Stawberry Italian Soda </Text>

                        <Text style={{fontWeight: 'bold',}}>     FOOD </Text>
                        <Text >{'\t'}🔥 Garlic Aioli Burger </Text>
                        <Text >{'\t'}🔥 St. Olaf Burger </Text>
                        <Text >{'\t'}🔥 Impossible Burger </Text>
                    </View>
                    <VerticleLine/>

                    

                    <View style={styles.section}>
                      <Text style={styles.text}> 
                        DRINK OF THE MONTH
                      </Text>
                    </View>
                    
                    <VerticleLine/>
                    <View style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 1, }}/>

                </ScrollView>
            </View>
            <View style={styles.nav}>
                {/* <Image source={{uri: this.state.home}}
                    style={{width: undefined, height: '100%', aspectRatio: 1,}} />
                <Image source={{uri: this.state.stav}}
                    style={{width: undefined, height: '100%', aspectRatio: 1,}} />
                <Image source={{uri: this.state.cage}}
                    style={{width: undefined, height: '100%', aspectRatio: 1,}} />
                <Image source={{uri: this.state.app_icon}}
                    style={{width: undefined, height: '100%', aspectRatio: 1,}} />  */}

                <Button 
                            
                    title="🏠"
                    onPress={() => Alert.alert(
                        'Its home !')}
                />
                <Button  
                    title="🍴"
                    onPress={() => Alert.alert(
                        'Its caf !')}
                />
                <Button  
                    title="☕"
                    onPress={() => Alert.alert(
                        'Its cage !')}
                />
                <Button  
                    title="🍕"
                    onPress={() => Alert.alert(
                        'Its pause !')}
                />

            </View>

        </View>
        

      );
    }

  }

  /* Verticle lines used to seperate sections and comments */

  class VerticleLine extends Component {
    constructor (props) { super(props); }
    render () {
        return(
            <View style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 0.5, }}/>
        )
    }
}