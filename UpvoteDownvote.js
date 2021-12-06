import React, { Component } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

export default class UpDown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			upVote: false,
			downVote: false,
			selectedButton: '',
		};
		this.handleUpvote = this.handleUpvote.bind(this);
		this.handleDownvote = this.handleDownvote.bind(this);
	}
	
	handleUpvote = () => {
		this.setState({
			selectedButton: 'Upvote',
			upVote: !this.state.upVote,
			downVote: false,
		});
	}
	
	handleDownvote = () => {
		this.setState({
			selectedButton: 'Downvote',
			downVote: !this.state.downVote,
			upVote: false,
		});
	}

	render() {
		const check_up = this.state.upVote ? 'pressed' : 'not pressed';
		const check_down = this.state.downVote ? 'pressed' : 'not pressed';
		return (
			<View style={styles.container}>
				<TouchableOpacity 
					style={{backgroundColor: this.state.selectedButton === 'Upvote' ? 'lightblue' : 'gray', padding: 15}}
					onPress={() => this.handleUpvote()}>
					<Text style={styles.text}> + </Text>
				</TouchableOpacity>
				
				<Text>{check_up} </Text>
				<Text>{check_down} </Text>
				
				<TouchableOpacity 
					style={{backgroundColor: this.state.selectedButton === 'Downvote' ? 'lightblue' : 'gray', padding: 15}}
					onPress={() => this.handleDownvote()}>
					<Text style={styles.text}> - </Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	text: {
		color: 'white',
	},
	container: {
		flexDirection: 'row',
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
});