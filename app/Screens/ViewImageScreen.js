import React from "react";

import { Image, StyleSheet, View, StatusBar } from "react-native";

function ViewImageScreen(props) {
  return (
  <View
  style={styles.container}
  >
      <StatusBar/>
      <View
      style={styles.backButton}
      />
      <View
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
    container:{
        backgroundColor: "black",
        flex: 1
    },
    image: {
        resizeMode: "contain",
        width: "100%",
        height: "100%"
    },
    backButton: {
        position: "absolute",
        backgroundColor: "#fc5c65",
        top: 30,
        left: 30,
        height: 50,
        width: 50
    },
    deleteButton: {
        position: "absolute",
        backgroundColor: "#4ecdc4",
        top: 30,
        right: 30,
        height: 50,
        width: 50,

    }
});

export default ViewImageScreen;
