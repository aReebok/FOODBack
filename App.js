import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CafComments from './library/CafComments';
import Home from './library/Home';

const Stack = createStackNavigator();

export default class MyApp extends Component {
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
