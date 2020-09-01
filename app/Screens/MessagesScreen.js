import React, { useState } from 'react'
import { FlatList, View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'
import ListItem from '../components/ListItem'
import Constants from 'expo-constants'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemseparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    }
]


function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false)


    const handleDelete = message => {
        //delete the message from messages
        setMessages(messages.filter(m => m.id !== message.id))
        // call the server to delete message
    }

    return (
        <Screen >

            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => <ListItem
                    profilePic={item.image}
                    title={item.title}
                    subtitle={item.description}
                    onPress={() => console.log(item.title)}
                    renderRightActions={() => <ListItemDeleteAction
                        onPress={() => handleDelete(item)} />}
                />
                }
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([{
                        id: 2,
                        title: 'T2',
                        description: 'D2',
                        image: require('../assets/mosh.jpg')
                    },
                    ])
                }}
            />
        </Screen>
    )
}

const Styles = StyleSheet.create({
    screen: {
        // paddingTop: Constants.statusBarHeight
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        backgroundColor: "yellow",
    }
})

export default MessagesScreen;
