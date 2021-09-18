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
    useWindowDimensions,
    SafeAreaView,
} from 'react-native';
import {useForm, useController} from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

export default function HookForm() {
    const emailRef = React.useRef(null);
    const passwordRef = React.useRef(null);
    const {width, height} = useWindowDimensions();

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
            .required('Required')
            .min(8, 'Too Short!')
            .max(10, 'Too Long!')
    });

    const {handleSubmit, control} = useForm({
        resolver: yupResolver(LoginSchema),
    });

    const {field: emailField, fieldState: emailState} = useController(
        {
            name: 'email',
            control: control,
            defaultValue: '',
        }
    );

    const {field: passwordField, fieldState: passwordState} = useController(
        {
            name: 'password',
            control: control,
            defaultValue: '',
        }
    );

    function handleSubmitOnPress(value) {
        alert(JSON.stringify(value))
    }

    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
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
                        <Text
                            style={{
                                color: 'red'
                            }}
                        >
                            {emailState.error?.message}
                        </Text>
                        <TextInput
                            ref={emailRef}

                            placeholder="Enter your email"
                            autoCapitalize="none"
                            autoCompleteType="email"
                            keyboardType="email-address"
                            returnKeyType="next"
                            returnKeyLabel="next"

                            style={{
                                ...styles.textInput,
                                borderColor: emailState.error?.message ? 'red' : 'black',
                            }}

                            onChangeText={emailField.onChange}
                            value={emailField.value}
                            onSubmitEditing={() => passwordRef.current?.focus()}
                        />

                        <Text
                            style={{
                                color: 'red'
                            }}
                        >
                            {passwordState.error?.message}
                        </Text>
                        <TextInput
                            ref={passwordRef}

                            placeholder="Enter your password"
                            secureTextEntry
                            autoCompleteType="password"
                            autoCapitalize="none"
                            returnKeyType="done"
                            returnKeyLabel="done"

                            style={{
                                ...styles.textInput,
                                borderColor: passwordState.error?.message ? 'red' : 'black',
                            }}

                            onChangeText={passwordField.onChange}
                            value={passwordField.value}
                        />
                        <View style={styles.btnContainer}>
                            <Button title="Submit" onPress={handleSubmit(handleSubmitOnPress)}/>
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

