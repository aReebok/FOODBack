import React, { Component, useState, useEffect} from 'react';
import { Image, Text, View, ScrollView, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './styles'






function CafRating(props) {
    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         green: '██████',
    //         red: '██████',
    //         p_green: this.props.p_green,
    //         p_red: this.props.p_red,
    //     }
        
    // }

    const [greenBar, setGreenBar] = useState(props.pGreen);
    const [redBar, setRedBar] = useState(props.pRed);



    const handleRatingVisual = () => {
        let block = '█';
        let green_draw = '';
        let red_draw = ''
        for (let i = 0; i < props.p_green; i++) {
            green_draw += block;
            // console.log("green added...");
        }
        for (let i = 0; i < props.p_red; i++) {
            red_draw += block;
            // console.log("red added...");
        }
        setGreenBar(green_draw);
        setRedBar(red_draw);
        return;
    }

    useEffect(() => {
        handleRatingVisual();
    }, []);

    
    return (
        <View style={styles.section}>
            <View style ={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.text}> TODAY'S CAF RATING </Text>
                <Button color="black"  title="➢" 
                    onPress={() => handleRatingVisual()}/>
            </View>
            
            
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: -7,}}>
                <Text> {'\t'}Based on Caf feedback: </Text>
                <Text style={styles.progbar}>{greenBar}<Text style={styles.progbar2}>{redBar}</Text>	 </Text>

            </View>
        </View>

        
    );


}

export default CafRating;