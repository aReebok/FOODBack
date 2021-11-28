import React, { Component } from 'react';
import { Image, Text, View, TextInput, ScrollView, Button, Alert, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

import styles from './home_features/styles'
import Comment from './comment_feature/Comment'

import NavBar from './NavBar';


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
                    {/* <CafRating/>
                    <HotAtCage/>
                    <DrinkOfTheMonth/>       
                    <NewItems/>              */}

                    <Text style={styles.text}>Caf Comments</Text>
                    <View style={styles.comments}>
                        {/* This is where one comment will be */}
                        <Comment text={'this is a long long I WANT ofshdufhiue long long long long comment'}/>
                        <Comment text={'Comment 2'}/>
                    </View>

                </ScrollView>

                <View>
                    <KeyboardAvoidingView
                        // keyboardVerticalOffset={}
                        behavior= {Platform.OS === 'ios' ? "padding" : "height"}
                        style={styles.writeCommentWrapper}>
                            <TextInput style={styles.input} placeholder={"Write a comment"}></TextInput>
                        <TouchableOpacity  >
                            <View style={styles.addWrapper}>
                                <Text style={styles.addText}>+</Text>
                            </View>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>
                <NavBar/>
            </View>
            
        </View>
        

      );
    }

  }

  
