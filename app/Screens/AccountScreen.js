import React from 'react';
import { View, StyleSheet, StatusBar, Platform } from 'react-native';
import Colours from '../config/colours'
import ListItem from '../components/ListItem';
import MenuItem from '../components/MenuItem'
import { } from '@expo/vector-icons'

function AccountScreen() {
    return (
        <View style={Styles.container}>
            <View style={Styles.menuItem}>
                <ListItem
                    title="Mosh Hamedani"
                    subtitle="programmingwithmosh@gmail.com"
                    profilePic={require('../assets/mosh.jpg')}
                    onPress={() => console.log("pressed")}
                    renderRightActions={() => console.log("swiped")}
                ></ListItem>
            </View>
            <View style={Styles.menuItem}>
                <MenuItem
                    title="My Listings"
                    iconName="format-list-bulleted"
                    iconColour={Colours.primary}
                    onPress={() => console.log("My Listings")}
                />
                <MenuItem
                    title="My Messages"
                    iconName="email"
                    iconColour={Colours.secondary}
                    onPress={() => console.log("My Messages")}
                />
            </View>
            <View style={Styles.menuItem}>
                <MenuItem
                    title="Log Out"
                    iconName="logout"
                    iconColour={Colours.yellow}
                    onPress={() => console.log("Logged Out")}
                />
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: Colours.light,
        flex: 1
    },
    menuItem: {
        backgroundColor: Colours.white,
        marginTop: 30,
    }
})

export default AccountScreen;