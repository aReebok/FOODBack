import React, { Component } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';

export default class UpDown extends Component {
	constructor(props) {
		super(props);
		this.state = {
			upVote: false,
			downVote: false,
			selectedButton: '',
			vote_count: 5,
		};
		this.handleUpvote = this.handleUpvote.bind(this);
		this.handleDownvote = this.handleDownvote.bind(this);
	}
	
	handleUpvote = () => {
		this.setState({
			selectedButton: 'Upvote',
			upVote: !this.state.upVote,
			downVote: false,
			vote_count: this.state.vote_count + 1
		});
	}
	
	handleDownvote = () => {
		this.setState({
			selectedButton: 'Downvote',
			downVote: !this.state.downVote,
			upVote: false,
			vote_count: this.state.vote_count - 1
		});
	}
		
	render() {
		var vote_count = this.state.vote_count;
		return (
			<View style={styles.container}>
				<TouchableOpacity 
					style={{backgroundColor: this.state.selectedButton === 'Upvote' ? 'gray' : 'gray', padding: 15}}
					onPress={() => this.handleUpvote()}>
					<Text style={styles.text}> + </Text>
				</TouchableOpacity>
				
				<Text> {vote_count} </Text>
				
				<TouchableOpacity 
					style={{backgroundColor: this.state.selectedButton === 'Downvote' ? 'gray' : 'gray', padding: 15}}
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