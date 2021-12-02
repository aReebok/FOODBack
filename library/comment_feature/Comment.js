import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Comment extends Component {
    /*A section that includes the 3 newest items at cage
         that have been entered in the database - updates 
         as newer items entered */ 
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.comment}>
                
                <View style={styles.itemLeft}>
                    <Text>{this.props.text}</Text>
                </View>
                <View style={styles.itemRight}>
                    <Text>likes/dislikes</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    comment:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        marginHorizontal: -10,

        marginBottom: 10,
        backgroundColor: 'white',
        // flexWrap: 'wrap',
        // borderRadius: 10,
    },
    itemLeft:{
        flex: 3,
        alignItems: 'center', //align items according to this parent (like setting self align on each item)
        justifyContent: 'center',
        flexWrap: 'wrap'    
    },
    itemRight:{
        flex: 1,
        paddingLeft:10,
    }
});

// const vertLine = <View
// style={{
//   borderBottomColor: 'black',
//   borderBottomWidth: 1,
// }}/>

