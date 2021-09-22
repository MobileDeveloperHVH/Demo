import React from 'react'
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

export default function Demo() {

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

    return (
        <SafeAreaView>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {
                    array.map((value, index) => (
                        <View style={{
                            width: 100,
                            height: 100,
                            marginLeft: 3,
                            borderColor: 'grey',
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text>{value}</Text>
                        </View>
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    )
}
