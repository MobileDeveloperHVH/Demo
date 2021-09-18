import React from 'react';
import {
    View,
    Image,
    useWindowDimensions,
    TextInput,
    TouchableOpacity,
    Text,
    SafeAreaView,
} from 'react-native';
import banner from './assets/img-banner-facebook.jpg';

export default function Facebook() {

    const {width} = useWindowDimensions();

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <Image
                source={banner}
                style={{
                    width: width,
                    height: width / 1.5,
                    resizeMode: 'cover',
                }}
            />

            <View
                style={{
                    marginTop: 20,
                    paddingHorizontal: 20,
                    flex: 1,
                }}
            >
                <View
                    style={{
                        height: 50,
                        width: '100%',
                        borderWidth: 1,
                        borderColor: '#E7E6E7',
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                        paddingHorizontal: 20,
                    }}
                >
                    <TextInput
                        placeholderTextColor="#DAD9DA"
                        placeholder="Số điện thoại hoặc email"
                        style={{
                            flex: 1,
                        }}
                        clearButtonMode="while-editing"
                    />
                </View>
                <View
                    style={{
                        height: 50,
                        width: '100%',
                        borderBottomWidth: 1,
                        borderLeftWidth: 1,
                        borderRightWidth: 1,
                        borderColor: '#E7E6E7',
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                        paddingHorizontal: 20,
                    }}
                >
                    <TextInput
                        placeholderTextColor="#DAD9DA"
                        placeholder="Mật khẩu"
                        style={{
                            flex: 1,
                        }}
                        secureTextEntry={true}
                        clearButtonMode="while-editing"
                    />
                </View>

                <TouchableOpacity
                    style={{
                        height: 50,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                        backgroundColor: '#0083F8',
                        borderRadius: 5,
                    }}
                    activeOpacity={0.7}
                >
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 15,
                        }}
                    >
                        Đăng nhập
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        height: 35,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                        borderRadius: 5,
                    }}
                    activeOpacity={0.7}
                >
                    <Text
                        style={{
                            color: '#1C65C4',
                            fontSize: 15,
                        }}
                    >
                        Quên mật khẩu?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        height: 35,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 5,
                    }}
                    activeOpacity={0.7}
                >
                    <Text
                        style={{
                            color: '#1C65C4',
                            fontSize: 15,
                        }}
                    >
                        Quay lại
                    </Text>
                </TouchableOpacity>
            </View>

            <SafeAreaView
                style={{
                    width: '100%',
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal: 20,
                    }}
                >
                    <View style={{height: 1, width: '30%', backgroundColor: '#E8E8E8'}}/>
                    <Text
                        style={{
                            marginHorizontal: 5,
                        }}
                    >
                        HOẶC
                    </Text>
                    <View style={{height: 1, width: '30%', backgroundColor: '#E8E8E8'}}/>
                </View>
                <TouchableOpacity
                    style={{
                        height: 50,
                        marginHorizontal: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                        backgroundColor: '#E9F5FF',
                        borderRadius: 5,
                    }}
                    activeOpacity={0.7}
                >
                    <Text
                        style={{
                            color: '#1C65C4',
                            fontSize: 15,
                        }}
                    >
                        Tạo tài khoản mới
                    </Text>
                </TouchableOpacity>
            </SafeAreaView>
        </View>
    )
}
