import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


function Comment (props) {
    /*A section that includes the 3 newest items at cage
         that have been entered in the database - updates 
         as newer items entered */ 
    return (
        <View style={styles.comment}>
            
            <View style={styles.itemLeft}>

                <View>
                    <Text style={{fontWeight:'bold', color: props.color}}>●
                    <Text style={{color:'black'}}>  {props.text}</Text></Text>
                </View>
            </View>
            <View style={styles.itemRight}>
                <View style={styles.date}>
                    <Text style={{paddingBottom: 10, fontSize:12,}}>{props.date}</Text>    
                </View>
                <View style={styles.votes}>
                    <Text>⇧</Text>
                    <Text style={{fontSize:12, fontWeight: 'bold'}}>{props.votes}</Text>
                    <Text>⇩</Text>
                </View>
                

            </View>

        </View>
    );

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
        flexDirection: 'column',
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


export default Comment;