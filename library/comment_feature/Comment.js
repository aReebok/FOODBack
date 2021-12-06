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
                    <Text style={{fontWeight:'bold',}}>{this.props.text}</Text>
                </View>
                <View style={styles.itemRight}>
                    <View style={styles.date}>
                        <Text style={{paddingBottom: 10,}}>2021/12/6</Text>    
                    </View>
                    <View style={styles.votes}>
                        <Text>⇧</Text>
                        <Text>0</Text>
                        <Text>⇩</Text>
                    </View>
                    

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
        flex: 4.5,
        alignItems: 'center', //align items according to this parent (like setting self align on each item)
        justifyContent: 'center',
        flexWrap: 'wrap'    
    },
    itemRight:{
        flex: 1,
        paddingLeft:10,
        // alignItems: 'center', //align items according to this parent (like setting self align on each item)
        // justifyContent: 'center',   
    },
    date:{
        flex: 1,
        // direction: 'rtl',
        alignItems: 'flex-end',
        // paddingBottom: 5,

    },
    votes:{
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

// const vertLine = <View
// style={{
//   borderBottomColor: 'black',
//   borderBottomWidth: 1,
// }}/>

