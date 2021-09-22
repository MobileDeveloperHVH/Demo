import React from 'react';
import {
    View,
    ScrollView,
    TextInput,
    StyleSheet,
    SafeAreaView,
    Text,
    Button,
    Keyboard
} from 'react-native';
import {KeyboardAwareView} from 'react-native-keyboard-aware-view';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import CustomInput, {CustomComponent} from './CustomInput';

export default function Buoi3() {
    const input1 = React.useRef();
    const input2 = React.useRef();
    const input3 = React.useRef();
    const input4 = React.useRef();
    const input5 = React.useRef();
    const input6 = React.useRef();

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const signUpSchema = Yup.object().shape({
        firstName: Yup.string().required('First name is required!'),
        lastName: Yup.string().required('Last name is required!'),
        password: Yup.string()
            .min(6, 'Password must be more then 6 characters')
            .max(10, 'Password must be less then 10 characters')
            .required('Password is required!'),
        phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone is required!'),
        address: Yup.string().required('Address is required!'),
        passportID: Yup.string().required('Passport ID is required!'),
    });

    const {handleChange, values, errors, handleSubmit} = useFormik({
        validationSchema: signUpSchema,
        initialValues: {
            firstName: '',
            lastName: '',
            password: '',
            phone: '',
            address: '',
            passportID: '',
        },
        onSubmit: (values) => {
            console.warn(values.lastName)
        }
    });

    return (
        <SafeAreaView style={{flex: 1}}>
            <KeyboardAwareView animated={true}>
                <View style={{flex: 1}}>
                    <Text style={styles.signUpTitle}>Sign Up</Text>
                    <ScrollView
                        style={[{flex: 1, alignSelf: 'stretch'}]}
                        keyboardShouldPersistTaps='always'
                        automaticallyAdjustContentInsets={false}
                        scrollEventThrottle={200}
                        keyboardDismissMode='on-drag'
                    >
                        <CustomComponent />
                        <CustomInput
                            title="First name"
                            ref={input1}
                            returnKeyType="next"
                            onSubmitEditing={() => input2.current?.focus()}
                            value={values.firstName}
                            onChangeText={handleChange('firstName')}
                            error={errors.firstName}
                            secureTextEntry={false}
                        />

                        <CustomInput
                            title="Last name"
                            ref={input2}
                            returnKeyType="next"
                            onSubmitEditing={() => input3.current?.focus()}
                            value={values.lastName}
                            onChangeText={handleChange('lastName')}
                            error={errors.lastName}
                            secureTextEntry={false}
                        />

                        <CustomInput
                            title="Password"
                            ref={input3}
                            returnKeyType="next"
                            onSubmitEditing={() => input4.current?.focus()}
                            value={values.password}
                            onChangeText={handleChange('password')}
                            error={errors.password}
                            secureTextEntry
                        />

                        <CustomInput
                            title="Phone"
                            ref={input4}
                            returnKeyType="next"
                            onSubmitEditing={() => input5.current?.focus()}
                            value={values.phone}
                            onChangeText={handleChange('phone')}
                            error={errors.phone}
                        />

                        <View style={styles.wrapInput}>
                            <Text style={styles.formTitle}>Address</Text>
                            <View style={styles.textInput}>
                                <TextInput
                                    ref={input5}
                                    style={styles.input}
                                    returnKeyType="next"
                                    onSubmitEditing={() => input6.current?.focus()}
                                    value={values.address}
                                    onChangeText={handleChange('address')}

                                    autoCorrect={false}
                                />
                            </View>
                            {
                                errors.address && (
                                    <Text style={styles.error}>{errors.address}</Text>
                                )
                            }
                        </View>

                        <View style={styles.wrapInput}>
                            <Text style={styles.formTitle}>Passport ID</Text>
                            <View style={styles.textInput}>
                                <TextInput
                                    ref={input6}
                                    style={styles.input}
                                    returnKeyType="done"
                                    onSubmitEditing={() => {
                                        Keyboard.dismiss();
                                    }}
                                    value={values.passportID}
                                    onChangeText={handleChange('passportID')}

                                    autoCorrect={false}
                                />
                            </View>
                            {
                                errors.passportID && (
                                    <Text style={styles.error}>{errors.passportID}</Text>
                                )
                            }
                        </View>
                    </ScrollView>
                </View>
                <Button title="Submit" onPress={handleSubmit}/>
            </KeyboardAwareView>
        </SafeAreaView>
    )
}

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
