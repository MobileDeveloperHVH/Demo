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
import {useFormik} from 'formik';
import * as Yup from 'yup';

export default function Formik() {
    const {width, height} = useWindowDimensions();
    const [emailHasFocused, setEmailHasFocused] = React.useState(false);
    const [passwordHasFocused, setPasswordHasFocused] = React.useState(false);

    const password = React.useRef(null);
    const email = React.useRef(null);

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
            .min(8, 'Too Short!')
            .max(10, 'Too Long!')
            .required('Required')
    });

    const {handleChange, handleSubmit, values, errors, handleBlur, touched} = useFormik(
        {
            validationSchema: LoginSchema,
            initialValues: {
                email: '',
                password: '',
            },
            onSubmit: (values) => {
                setEmailHasFocused(true);
                setPasswordHasFocused(true);
                alert(`Email: ${values.email}, Password: ${values.password}`)
            }
        });

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
                        {
                            emailHasFocused && (
                                <Text
                                    style={{
                                        color: 'red',
                                        fontSize: 15,
                                    }}
                                >
                                    {errors.email}
                                </Text>
                            )
                        }
                        <TextInput
                            ref={email}
                            placeholder="Enter your email"
                            autoCapitalize="none"
                            autoCompleteType="email"
                            keyboardType="email-address"
                            returnKeyType="next"
                            returnKeyLabel="next"
                            style={{
                                ...styles.textInput,
                                borderColor: emailHasFocused ? errors.email ? '#FF5A5F' : 'black' : 'black'
                            }}
                            value={values.email}
                            onChangeText={handleChange('email')}
                            onSubmitEditing={() => password.current?.focus()}
                            // onBlur={handleBlur('email')}
                            onFocus={() => {
                                setEmailHasFocused(true);
                            }}
                        />
                        {
                            passwordHasFocused && (
                                <Text
                                    style={{
                                        color: 'red',
                                        fontSize: 15,
                                    }}
                                >
                                    {errors.password}
                                </Text>
                            )
                        }

                        <TextInput
                            ref={password}
                            placeholder="Enter your password"
                            secureTextEntry
                            autoCompleteType="password"
                            autoCapitalize="none"
                            returnKeyType="go"
                            returnKeyLabel="go"
                            style={{
                                ...styles.textInput,
                                borderColor: passwordHasFocused ? errors.password ? '#FF5A5F' : 'black' : 'black'
                            }}
                            value={values.password}
                            onChangeText={handleChange('password')}
                            // onBlur={handleBlur('password')}
                            onFocus={() => {
                                setPasswordHasFocused(true);
                            }}
                        />
                        <View style={styles.btnContainer}>
                            <Button title="Submit" onPress={handleSubmit}/>
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
        borderColor: 'grey',
        borderBottomWidth: 1,
        marginBottom: 36,
        fontSize: 18,
    },
    btnContainer: {
        backgroundColor: 'white',
        marginTop: 12
    }
});

