import React from 'react';
import {
    View,
    TextInput,
    ScrollView,
    Text,
    TouchableOpacity,
    SafeAreaView,
} from 'react-native';
import {KeyboardAwareView as AwareView} from 'react-native-keyboard-aware-view';
import {LinearGradient} from 'expo-linear-gradient';

function InputView({children, label = '', inputViewStyle}) {
    return (
        <>
            <Text
                style={{
                    color: '#074672',
                    fontWeight: 'bold',
                    marginTop: 20,
                    marginBottom: 10,
                    marginLeft: 20,
                }}
            >
                {label}
            </Text>
            <View
                style={{
                    height: 60,
                    marginHorizontal: 20,
                    paddingHorizontal: 12,
                    borderRadius: 5,

                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,

                    elevation: 3,

                    backgroundColor: 'white',
                    ...inputViewStyle
                }}
            >
                {children}
            </View>
        </>

    )
}

export default function KeyboardAwareView() {
    const scrollView = React.useRef();
    const input1 = React.useRef();
    const input2 = React.useRef();
    const input3 = React.useRef();
    const input4 = React.useRef();
    const input5 = React.useRef();
    const input6 = React.useRef();

    return (
        <SafeAreaView style={{flex: 1}}>
            <AwareView animated={true}>
                <View style={{flex: 1}}>
                    <ScrollView
                        ref={scrollView}
                        style={{
                            flex: 1,
                            alignSelf: 'stretch'
                        }}
                        keyboardShouldPersistTaps={true}
                        automaticallyAdjustContentInsets={false}
                        scrollEventThrottle={200}
                    >
                        <InputView label="First Name">
                            <TextInput
                                ref={input1}
                                style={{flex: 1}}
                                placeholder="First Name"
                                returnKeyLabel='next'
                                returnKeyType='next'
                                onSubmitEditing={() => input2.current?.focus()}
                            />
                        </InputView>
                        <InputView label="Last Name">
                            <TextInput
                                ref={input2}
                                style={{flex: 1}}
                                placeholder="Last Name"
                                returnKeyLabel='next'
                                returnKeyType='next'
                                onSubmitEditing={() => input3.current?.focus()}
                            />
                        </InputView>
                        <InputView label="Company Name">
                            <TextInput
                                ref={input3}
                                style={{flex: 1}}
                                placeholder="Company Name"
                                returnKeyLabel='next'
                                returnKeyType='next'
                                onSubmitEditing={() => input4.current?.focus()}
                            />
                        </InputView>
                        <InputView label="Business Number">
                            <TextInput
                                ref={input4}
                                style={{flex: 1}}
                                placeholder="Business Number"
                                returnKeyLabel='next'
                                returnKeyType='next'
                                onSubmitEditing={() => input5.current?.focus()}
                            />
                        </InputView>
                        <InputView label="Phone Number">
                            <TextInput
                                ref={input5}
                                style={{flex: 1}}
                                placeholder="Phone Number"
                                returnKeyLabel='next'
                                returnKeyType='next'
                                onSubmitEditing={() => input6.current?.focus()}
                            />
                        </InputView>
                        <InputView
                            label="Company Address"
                            inputViewStyle={{
                                marginBottom: 20,
                            }}
                        >
                            <TextInput
                                ref={input6}
                                style={{flex: 1}}
                                placeholder="Company Address"
                                returnKeyLabel='done'
                                returnKeyType='done'
                            />
                        </InputView>
                    </ScrollView>
                </View>
                <TouchableOpacity style={{
                    height: 50,
                    marginHorizontal: 20,
                    borderRadius: 5,
                    backgroundColor: '#707070',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'stretch'
                }}>

                    <Text style={{fontSize: 15, color: '#FFFFFF'}}>Save</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <LinearGradient
                        start={{x: 1, y: 1}} end={{x: 1, y: 0}}
                        colors={['#084773', '#40A0C7']}
                        style={{
                            height: 50,
                            marginHorizontal: 20,
                            borderRadius: 5,
                            backgroundColor: '#',
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'stretch',
                            marginTop: 20,
                        }}
                    >
                        <Text style={{fontSize: 15, color: '#FFFFFF'}}>Skip</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </AwareView>
        </SafeAreaView>
    )
}
