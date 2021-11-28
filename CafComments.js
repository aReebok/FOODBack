<<<<<<< HEAD
import React, { Component } from 'react';
import { Image, Text, View, TextInput, ScrollView, Button, Alert, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
=======
import React,  { useState, Component } from 'react';
import { Image, Text, View, TextInput, ScrollView, Button, Alert, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
>>>>>>> areeba

import styles from './home_features/styles'
import Comment from './comment_feature/Comment'

import NavBar from './NavBar';


<<<<<<< HEAD
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
=======
function CafComments(props) {
    const [comment, setComment] = useState();
    const [commentItems, setCommentItems] = useState([]);

    const handleAddComment = () => {
        // console.log(comment);
        Keyboard.dismiss();
        setCommentItems([...commentItems, comment])     // appends comment to a list of comments
        setComment(null);   // empties the input bar
    }


    let app_logo = {
        uri: 'https://i.imgur.com/dt5dJEI.png'
    };
>>>>>>> areeba
      return (
        <View style={styles.container}>
            <View style={styles.header1}></View>

            <View style={styles.header2}>
<<<<<<< HEAD
                <Image source = {{uri: this.state.app_logo}} style={{margin: 10, height: '100%', aspectRatio: 1.8,}} />
=======
                <Image source={app_logo} style={{margin: 10, height: '100%', aspectRatio: 1.8,}} />
>>>>>>> areeba
            </View>
      
            <View style={styles.body}>
                <ScrollView style={styles.scrollView}>
                    {/* <CafRating/>
                    <HotAtCage/>
                    <DrinkOfTheMonth/>       
<<<<<<< HEAD
                    <NewItems/>              */}
=======
                    <NewItems/>         */}
>>>>>>> areeba

                    <Text style={styles.text}>Caf Comments</Text>
                    <View style={styles.comments}>
                        {/* This is where one comment will be */}
<<<<<<< HEAD
                        <Comment text={'this is a long long I WANT ofshdufhiue long long long long comment'}/>
                        <Comment text={'Comment 2'}/>
=======
                        {
                            commentItems.map((item, index) => {
                                return <Comment key={index} text={item} />
                            })
                        }
                        {/* <Comment text={'this is a long long I WANT ofshdufhiue long long long long comment'}/>
                        <Comment text={'Comment 2'}/> */}
>>>>>>> areeba
                    </View>

                </ScrollView>

<<<<<<< HEAD
                
=======
>>>>>>> areeba
                <KeyboardAvoidingView 
                    keyboardVerticalOffset = {120} 
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.writeCommentWrapper}>
<<<<<<< HEAD
                    <TextInput style={styles.input} placeholder={'Write a task'} />
                    <TouchableOpacity >
=======
                    <TextInput style={styles.input} placeholder={'Write a task'} value={comment} onChangeText={text => setComment(text)} />
                    <TouchableOpacity onPress={() => handleAddComment()}>
>>>>>>> areeba
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
                
            </View>
            {/* <NavBar/> */}

            
        </View>
        

      );
<<<<<<< HEAD
    }

  }

  
=======

  }

  export default CafComments;
>>>>>>> areeba
