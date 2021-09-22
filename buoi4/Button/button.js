import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Button(props) {
    return (
        <TouchableOpacity
            style={[styles.button, props.buttonStyle]}
            onPress={props.onPress}
        >
            <Text style={[props.titleStyle]}>{props.title}</Text>
        </TouchableOpacity>
    )
}
