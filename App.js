import React, { Component } from 'react';
import { Button, View, Text, TextInput} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CafComments from './library/CafComments';
import Home from './library/Home';
import Login from './library/Login';
import LikeButton from './LikeButton';
// import CafComments from './library/CafComments';

const Stack = createStackNavigator();

export default class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'http://10.42.231.225:3001',
    };

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


//10.42.231.225


  render() {
    return (
      <NavigationContainer>
           <Stack.Navigator>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="CafComments" component={CafComments}/>
             </Stack.Navigator>      
        </NavigationContainer>
        // <LikeButton/>
      )
  }
}

