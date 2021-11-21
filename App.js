// import React, { Component } from 'react';
// import Home from './Home';

// export default class MyApp extends Component {
//     render() {
// 	return (
//     <Home url='./assets/foodback.PNG'/>
//   )}
// }
import React, { Component } from 'react';
import Home from './Home.js';

export default class MyApp extends Component {
    render() {
	return (
    <Home label="Some bananas - using class props"/>
  )}
}
