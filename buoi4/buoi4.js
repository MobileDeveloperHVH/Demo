import React from 'react';
import {View} from 'react-native';

import Button from './Button/button';

export default function Buoi4() {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Button
                buttonStyle={{
                    borderColor: 'red',
                }}
                title="Button 1"
                onPress={() => alert('Button 1')}
            />
            <Button
                buttonStyle={{
                    backgroundColor: 'red',
                    borderColor: 'white',
                }}
                titleStyle={{
                    color: 'white'
                }}
                title="Button 2"
                onPress={() => alert('Button 2')}
            />
        </View>
    );
}
