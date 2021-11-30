import React,  { useState, Component } from 'react';
import { Image, Text, View, TextInput, ScrollView, Button, Alert, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';

import styles from './home_features/styles'
import Comment from './comment_feature/Comment'


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
      return (
        <View style={styles.container}>
            <View style={styles.header1}></View>
            <View style={styles.header2}>
                <Image source={app_logo} style={{margin: 10, height: '100%', aspectRatio: 1.8,}} />
            </View>
      
            <View style={styles.body}>

                <ScrollView style={styles.scrollView}>
                    <View style={styles.section}>
                        <Text style={styles.text}>CAF COMMENTS</Text>
                        <View
                            style={{
                            borderBottomColor: 'grey',
                            borderBottomWidth: 1,
                            }}/>
                        <View style={styles.comments}>
                            {/* This is where one comment will be */}
                            {
                                commentItems.map((item, index) => {
                                    return <Comment key={index} text={item} />                                 })
                            }
                        </View>
                    </View>
                    
                </ScrollView>

                <KeyboardAvoidingView 
                    keyboardVerticalOffset = {145} 
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.writeCommentWrapper}>
                    <TextInput style={styles.input} placeholder={'Write a task'} value={comment} onChangeText={text => setComment(text)} />
                    <TouchableOpacity onPress={() => handleAddComment()}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
                
            </View>

            <View style={styles.nav}>
                    <Button title="🏠"
                        onPress={() => props.navigation.navigate("Home")}/>   
                    <Button title="💬"/>   

            </View>
            
        </View>
        

      );

  }

  export default CafComments;

