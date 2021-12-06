import React, { Component } from 'react';
import { StyleSheet, Text, Button, View, TextInput } from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: 'http://10.42.231.225:3001',
            formContentType: "application/x-www-form-urlencoded;charset=UTF-8", 
            username: 'username',
            pin: '0000',
        };
    
      }
      handlePress = (op, method = '', params = {}) => {
        if (method != '')
            params.method = method;
        fetch(this.state.url + '/'+op, params)
            .then((response) => response.text())
            .then((responseText) => {
                let login = `${responseText}`;
                login = login.split(':');
                // alert(login[1]);
                if (login[1] == `"1"}`) {
                    console.log("Correct password... logging in...");
                    // MOVE ON TO HOME PAGE
                    return this.props.navigation.navigate('Home'); 
                } else {
                    console.log("Incorrect password.");
                    // display wrong input 
                    alert("Wrong information inputed; try again.");
                }
            })
            .catch((error) => {
                console.error(error);
            });
      }

    render() {
        return(
            <View style={styles.container}>
                <Text style={{padding: 10,}}>Welcome to FOODBack</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder={'Enter username'}
                    onChangeText={(username)=> this.setState({username})} />
                <TextInput 
                    style={styles.input} 
                    placeholder={'Enter pin'} 
                    onChangeText={(pin) => this.setState({pin}) }/>
                {/* <Button
                    color='black' title='LOGIN'
                    onPress={() => this.handlePress('login', 'GET', {
                        headers: {
                            "Content-type": this.state.formContentType
                        },
                        body: 'pin=${this.state}'
                     }
                    )} /> */}
                    <Button
                        title='LOGIN'
                        onPress={() => this.handlePress('login', 'PUT', {
                            headers: {
                            "Content-type": this.state.formContentType
                            }, 
                        body: `username=${this.state.username},${this.state.pin}`
                        }
                    )}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        flex: 1,
        backgroundColor:'orange',
        alignItems: 'center',
        // justifyContent: 'center'
        // backgroundColor: '',
    },
    input:{
        // padding: 10,
        paddingVertical:15,
        paddingHorizontal: 15,
        backgroundColor: '#e6e6e6',
        borderColor: '#c0c0c0',
        borderWidth: 1,
  
        width: '60%',
    },
});