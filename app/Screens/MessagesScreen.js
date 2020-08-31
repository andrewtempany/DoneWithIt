import React from 'react'
import { FlatList, View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native'
import ListItem from '../components/ListItem'
import Constants from 'expo-constants'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemseparator'

const messages = [
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


function MessagesScreen() {
    return (
        <Screen>

            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => <ListItem
                    profilePic={item.image}
                    title={item.title}
                    subtitle={item.description}
                    onPress={() => console.log(item.title)}
                    renderRightActions={() => <View style={{ backgroundColor: "tomato", width: 70 }} />}
                />}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    )
}

const Styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
})

export default MessagesScreen;