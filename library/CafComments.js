import React,  { useState, Component } from 'react';
import { Image, Text, View, TextInput, ScrollView, Button, Alert, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';

import styles from './home_features/styles'
import Comment from './comment_feature/Comment'


function CafComments(props) {
    
    // var state_comments = 0;
    const [stateComments, setStateComments] = useState(0);
    // setStateComments(0);
    let url = 'http://10.42.231.225:3001';
    let formContentType="application/x-www-form-urlencoded;charset=UTF-8";

    const [comment, setComment] = useState();
    const [commentItems, setCommentItems] = useState([]);

    // const handleAddComment = () => {
    //     // console.log(comment);
    //     Keyboard.dismiss();
    //     setCommentItems([...commentItems, comment])     // appends comment to a list of comments
    //     setComment(null);   // empties the input bar
    // }

    handleAddComment = (op, method = '', params = {}) => {
        if (method != '')
            params.method = method;
        fetch(url + '/'+op, params)
            .then((response) => response.text())
            .then((responseText) => {
                Keyboard.dismiss();
                setCommentItems([...commentItems, comment]);
                setComment(null);
    //             alert(`
    //                 Sent:  op=${JSON.stringify(op)}\nparams+method=${
    //   JSON.stringify(params)}\n
    //                 Received:  ${responseText}`);
                // setStateComments(1);
            })
            .catch((error) => {
                console.error(error);
            });
      }

    
    const handlePressComments = (op, method = '', params = {}) => {
        if (method != '')
            params.method = method;
        fetch(url + '/'+op, params)
            .then((response) => response.text())
            .then((responseText) => {
              let l_comments = responseText.split('\"');  
              let len = l_comments.length;
              let arr = [];
            //   for(let i = 0; i <= len; i++){
            //     console.log(i + ": " + l_comments[i]);
            //     }
              for (let i = 3; i <= len; i++) {
                arr.push(`${l_comments[i]}`);
                i += 9;
              }
              setCommentItems([]); // empties comments so far to refresh 
              if (stateComments == 0) {
                // console.log("IN STATE = 0");
                setCommentItems(arr);
                setStateComments(1);
              } else {
                // console.log("IN STATE = 1");
                setCommentItems([]); // empties comments so far to refresh 
                setStateComments(0);
              }
              
            })
            .catch((error) => {
                console.error(error);
            });
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
                        <View style={styles.cafHeader}>
                            <Text style={styles.text}>CAF COMMENTS</Text>
                            <Button color="black" title="⋮"
                                onPress={() => handlePressComments('comments','GET')}/>
                        </View>
                        <View
                            style={{
                            borderBottomColor: 'grey',
                            borderBottomWidth: 1,
                            }}/>
                        <View style={styles.comments}>
                            {/* <Text>{loaded_comments}</Text> */}
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
                    <TouchableOpacity onPress={() => handleAddComment('comments','POST', {
                        headers:{
                            "Content-type": formContentType

                        },
                        body: `comment=${comment}`
                    })}>
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

