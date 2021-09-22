import React from 'react'
import {SafeAreaView, FlatList, View, Text, RefreshControl, ActivityIndicator} from 'react-native';

export default function Demo2() {
    const [refreshing, setRefreshing] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    const [data, setData] = React.useState(array);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);


    function onLoading(){
        setLoading(true);
        for (let i = 0; i < 15 ; i ++) {
            array.push(Math.random());
        }
        setData(array);
        setTimeout(() => {
            setLoading(false);
        },3000);
    }


    function renderItem(props) {
        return (
            <View style={{
                height: 300,
                marginTop: 5,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: 'grey',
                marginHorizontal: 5,
            }}>
                <Text>{props.item.toString()}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <FlatList
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.toString()}
                onEndReached={onLoading}
                onEndReachedThreshold={10}
                ListFooterComponent={
                    <React.Fragment>
                        {
                            loading ? (
                                <View
                                    style={{
                                        width: '100%',
                                        height: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                        }}
                                    >
                                        <ActivityIndicator/>
                                        <Text
                                            style={{
                                                marginLeft: 10,
                                            }}
                                        >Data Loading ...</Text>
                                    </View>
                                </View>
                            ) : null
                        }
                    </React.Fragment>
                }
            />
        </SafeAreaView>
    )
}
