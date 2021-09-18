import React from 'react';
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Text,
    Platform,
    Button,
    ScrollView,
    useWindowDimensions, SafeAreaView,
} from 'react-native';

export default function KeyboardAvoidingView() {
    const {width, height} = useWindowDimensions();

    function handleSubmitOnPress() {
    }

    return (
        <ScrollView
            keyboardShouldPersistTaps='handled'
            style={{
                width,
                height,
            }}
            bounces={false}
        >
            <SafeAreaView
                style={{
                    width,
                    height,
                }}
            >
                <Text style={styles.header}>Login</Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{
                        flex: 1
                    }}
                >
                    <View style={styles.inner}>
                        <TextInput placeholder="Username" style={styles.textInput}/>
                        <View style={styles.btnContainer}>
                            <Button title="Submit" onPress={handleSubmitOnPress}/>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </ScrollView>
    )
        ;
};

const styles = StyleSheet.create({
    inner: {
        padding: 25,
        flex: 1,
        justifyContent: 'flex-end'
    },
    header: {
        fontSize: 36,
        marginLeft: 25,
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12
    }
});

