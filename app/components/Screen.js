import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';

function Screen({ children }) {
    return (
        <SafeAreaView style={Styles.screen}>
            {children}
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
    }
})

export default Screen;