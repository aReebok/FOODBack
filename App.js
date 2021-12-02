import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CafComments from './library/CafComments';
import Home from './library/Home';

const Stack = createStackNavigator();

export default class MyApp extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   url: 'http://192.168.0.249:3001',
    //   formContentType: "application/x-www-form-urlencoded;charset=UTF-8", 
    //   name: 'hello2'
    // };
  }

//     handlePress = (op, method = '', params = {}) => {
//       if (method != '')
//           params.method = method;
//       fetch(this.state.url + '/'+op, params)
//           .then((response) => response.text())
//           .then((responseText) => {
//               alert(`
//                   Sent:  op=${JSON.stringify(op)}
// params+method=${JSON.stringify(params)}\n
//                   Received:  ${responseText}`);
//           })
//           .catch((error) => {
//               console.error(error);
//           });
// }

  
  render() {
    return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="CafComments" component={CafComments}/>
            </Stack.Navigator>
      </NavigationContainer>
      )
  }
}
