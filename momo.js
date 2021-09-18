import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';

export default function Momo() {
    const name = 'huynh van hiep';
    const phoneNumber = 964500000;

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{
                flex: 1
            }}
        >
            <View style={styles.view}>
                <View style={{flex: 1}}/>
                <View
                    style={{
                        flex: 2,
                    }}
                >
                    <View style={styles.view1}>
                        <SafeAreaView style={styles.safeArea}>
                            <Text style={styles.text}>Xin chào!</Text>
                            <Text style={styles.name}>{name.toUpperCase()}</Text>
                            <Text style={styles.phoneNumber}>{`0${phoneNumber}`}</Text>
                        </SafeAreaView>
                    </View>
                    <View style={styles.view2}>
                        <View style={styles.textInput}>
                            <TextInput
                                style={styles.input}
                                onChangeText={(value) => {
                                    if (value.length === 6) {
                                        Keyboard.dismiss();
                                    }
                                }}
                                // value={number}
                                placeholder="Password"
                                keyboardType="numeric"
                                secureTextEntry={true}
                                maxLength={6}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.loginButton}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.loginButtonText}>{'Đăng nhập'.toUpperCase()}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view3}>
                        <TouchableOpacity
                            style={styles.leftButton}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.loginButtonText}>{'Quên mật khẩu'.toUpperCase()}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.rightButton}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.loginButtonText}>{'Thoát tài khoản'.toUpperCase()}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#D01A79',
    },
    view1: {
        width: '100%',
        height: 250,
    },
    view2: {
        width: '100%',
        paddingHorizontal: 30,
    },
    view3: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 50,
    },
    safeArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 50,
    },
    name: {
        color: 'white',
        fontSize: 15,
        marginTop: 10,
    },
    phoneNumber: {
        color: 'white',
        fontSize: 15,
        marginTop: 10,
    },
    textInput: {
        width: '100%',
        height: 70,
        backgroundColor: 'white',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        color: '#A09F9F',
        fontSize: 20,
        textAlign: 'center'
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#AD1464',
        borderRadius: 25,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 15
    },
    leftButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
