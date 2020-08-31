import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, SafeAreaView } from 'react-native';

function Screen({ children }) {
    return (
        <SafeAreaView style={Styles.screen}>
            {children}
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight
    }
})

export default Screen;