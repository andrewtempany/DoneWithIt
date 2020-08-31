import React from "react";
import Colours from "../config/colours"
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Image, StyleSheet, View, StatusBar } from "react-native";

function ViewImageScreen(props) {
    return (
        <View
            style={styles.container}
        >
            <StatusBar />
            <MaterialCommunityIcons name="close" size={40}
                style={styles.backButton}
            />
            <MaterialCommunityIcons name="trash-can-outline" size={40}
                style={styles.deleteButton}
            />
            <Image
                style={styles.image}
                source={require("../assets/chair.jpg")}
            ></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colours.black,
        flex: 1
    },
    image: {
        resizeMode: "contain",
        width: "100%",
        height: "100%"
    },
    backButton: {
        position: "absolute",
        color: Colours.white,
        top: 30,
        left: 30,
    },
    deleteButton: {
        position: "absolute",
        color: Colours.white,
        top: 30,
        right: 30,
    }
});

export default ViewImageScreen;
