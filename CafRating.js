import React, { Component } from 'react';
import { Image, Text, View, ScrollView, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './style'

export default class CafRating extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.section}>
                <Text style={styles.text}> TODAY'S CAF RATING </Text>
                
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text> {'\t'}Based on Caf feedback: </Text>
                    <Text style={styles.progbar}>██████▁▁▁▁▁▁	 </Text>
                    {/* <Text style={styles.progbar}>██████▁▁▁▁▁▁	 </Text> */}
                </View>
            </View>

            
        )
    }

}



