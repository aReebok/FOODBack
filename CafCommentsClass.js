import React,  { useState, Component } from 'react';
import { Image, Text, View, TextInput, ScrollView, Button, Alert, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';

import styles from './library/home_features/styles'
import Comment from './library/comment_feature/Comment'
import Home from './library/Home';

export default class CafCommentsClass extends Component {
    constructor (props) {
        super(props);
        this.state = {
            loaded_comments: [],
            url: 'http://10.42.231.225:3001',
        }
        
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

              for(let i = 0; i <= len; i++){
                  console.log(i + ": " + comments[i]);
              }
            //   for (let i = 3; i <= len; i++) {
            //     arr.push(comments[i]);
            //     i += 3;
            //   }
              for(let i=0; i< arr.length; i++) {
                console.log(i+': ' + arr[i]);
                }
              this.state.loaded_comments = arr;
              return;
            // console.log(this.state.loaded_comments);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    handlePrinting = () => {
        console.log("entered -------")
        // console.log(this.state.loaded_comments);
        for(let i=0; i< this.state.loaded_comments.length; i++) {
            console.log(i+': ' + this.state.loaded_comments[i]);
        }
        return(
            <View>
                <Text>KMS</Text>
            </View>
        );
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header1}>
                    <Button title="🔄" 
                    onPress={() => this.state.loaded_comments = this.handlePressComments('comments','GET')}/> 
                    <Button title="🔄" onPress={() => this.handlePrinting()}/>
                </View>
                <CommentSection loaded_comments={this.state.loaded_comments}/>
                {/* {
                    // commentItems.map((item, index) => {
                    //     return <Comment key={index} text={item} /> })
                    this.state.loaded_comments.map((item, index) => {
                        return <Comment key={index} text={item}/>
                    })
                } */}
                <View style={styles.nav2}>
                    <Button title="🏠"
                        onPress={() => this.props.navigation.navigate("Home")}/>   
                    <Button title="💬"/>   
                </View>
            </View>
            
        );
    }
}

function CommentSection (props) {
    // console.log("entered commentSection");

    const [comment, setComment] = useState();
    const [commentItems, setCommentItems] = useState([]);
    

    const handleAddComment = () => {
        // console.log(comment);
        Keyboard.dismiss();
        setCommentItems([...commentItems, comment])     // appends comment to a list of comments
        setComment(null);   // empties the input bar
    }

    return(
        <View style={styles.container}>
            <View style={styles.header1}></View>
            <View style={styles.header2}>
                <Image source={{uri: 'https://i.imgur.com/dt5dJEI.png'}} style={{margin: 10, height: '100%', aspectRatio: 1.8,}} />
            </View>
      
            <View style={styles.body}>

                <ScrollView style={styles.scrollView}>
                    <View style={styles.section}>
                        <View style={styles.cafHeader}>
                            <Text style={styles.text}>CAF COMMENTS</Text>
                        </View>
                        <View
                            style={{
                            borderBottomColor: 'grey',
                            borderBottomWidth: 1,
                            }}/>
                        <View style={styles.comments}>
                            <Text></Text>
                            <Button title="🔄" onPress={() => alert(props.loaded_comments.length)}/>

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

            
            
        </View>


    );
}