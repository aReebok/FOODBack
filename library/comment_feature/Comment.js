import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


function Comment (props) {
    /*A section that includes the 3 newest items at cage
         that have been entered in the database - updates 
         as newer items entered */ 

    const url = 'http://10.42.231.225:3001';
    const formContentType = "application/x-www-form-urlencoded;charset=UTF-8";


    const [trash, setTrash] = useState('');

    const onLoad = ( ) => {
        console.log("loading comment: " + props.cid);
        console.log("uid: " + uid);
        console.log("postuid:" + props.cid)

        if(props.post_uid == uid) {
            // update trash 
            setTrash('x');        
        } else { setTrash('') }
    }

    useEffect(() => {
        onLoad();
    }, []);


    const handleDeleteComment = (op, method = '', params = {}) => {
        if (method != '')
            params.method = method;
	console.log(`received request ${op}, ${method}`)
        fetch(url + '/'+op, params)
            .then((response) => response.text())
            .then((responseText) => {
		console.log(`response text: ${responseText}`)
            //     alert(`
            //         Sent:  op=${JSON.stringify(op)}\nparams+method=${
			// JSON.stringify(params)}\n
            //         Received:  ${responseText}`);
            alert("Comment deleted. Refresh the page.");
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // const handleDeleteComment 

    const deleteComment = ( ) => {
        if (props.post_uid == uid) {
            setTrash('');
            // DELETE item: 
            handleDeleteComment('comments', 'DELETE', {
                    headers: {
                        "Content-type": formContentType
                    }, 
                        body: `cid=${props.cid}`
                    }
            
            );
        }
    }

    return (
        <View style={styles.comment}>
            
            <View style={styles.itemLeft}>

                <View>
                    <Text style={{fontWeight:'bold', color: props.color}}>●
                    <Text style={{color:'black'}}>  {props.text}</Text></Text>
                </View>
            </View>
            <View style={styles.itemRight}>
                {/* <Text>🗑️</Text> */}              

                <View style={styles.date}>
                    <Text style={{paddingBottom: 10, fontSize:12,}}>{props.date} </Text>    
                    <View style={{marginTop: -20}}>
                    <Button 
                        title={trash}
                        onPress={() => deleteComment()}
                        />
                </View>     
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
        flex: 4,
        flexDirection: 'column',
        alignItems: 'center', //align items according to this parent (like setting self align on each item)
        justifyContent: 'center',
        flexWrap: 'wrap'    
    },
    itemRight:{
        flex: 1,
        paddingRight:10,
        // alignItems: 'center', //align items according to this parent (like setting self align on each item)
        // justifyContent: 'center',   
    },
    date:{
        flex: 1,
        // direction: 'rtl',
        alignItems: 'flex-end',
        flexDirection: 'row'
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