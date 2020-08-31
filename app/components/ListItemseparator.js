import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colours from '../config/colours'

function ListItemSeparator() {
    return (
        <View style={Styles.separator} />
    )
}

const Styles = StyleSheet.create({
    separator: {
        width: "100%",
        height: 1,
        backgroundColor: Colours.light
    }
})

export default ListItemSeparator;