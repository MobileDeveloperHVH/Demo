import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

// ---> Custom component <---
export function CustomComponent() {
    return <View style={{
        alignSelf: 'center',
        margin: 15,
    }}>
        <Image
            source={require('./assets/img-banner-facebook.jpg')}
            style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: 'grey',
            }}
        />
    </View>
}

const CustomInput = React.forwardRef((
    {
        title = '',
        returnKeyType,
        onSubmitEditing = () => {
        },
        value,
        onChangeText = () => {
        },
        secureTextEntry = false,
        error
    }, ref) => {

    return <View style={styles.wrapInput}>
        <Text style={styles.formTitle}>{title}</Text>
        <View style={styles.textInput}>
            <TextInput
                ref={ref}
                style={styles.input}
                returnKeyType={returnKeyType}
                onSubmitEditing={onSubmitEditing}
                value={value}
                onChangeText={onChangeText}

                autoCorrect={false}
                secureTextEntry={secureTextEntry}
            />
        </View>
        {
            error && (
                <Text style={styles.error}>{error}</Text>
            )
        }
    </View>;
});


const styles = StyleSheet.create({
    wrapInput: {
        marginHorizontal: 15,
        marginTop: 30,
    },
    textInput: {
        width: '100%',
        height: 40,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
    },
    input: {
        flex: 1,
    },
    formTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    signUpTitle: {
        fontSize: 30,
        margin: 15,
    },
    error: {
        color: 'tomato',
        fontSize: 14,
    }
});

export default CustomInput;
