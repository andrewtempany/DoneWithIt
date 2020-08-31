import React from "react";
import Colours from "../config/colours";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <View style={styles.imageContainer}>
      <ImageBackground
        blurRadius={2}
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logoBox}>
          <Image style={styles.logo} source={require("../assets/logo-red.png")} />
          <Text style={styles.tagLine}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title="login"
            onPress={() => console.log("login")}
            colour="primary"
          />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            title="register"
            onPress={() => console.log("register")}
            colour="secondary"
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    height: 70,
    paddingHorizontal: "5%",
    paddingBottom: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    backgroundColor: Colours.black
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoBox: {
    position: "absolute",
    top: 150,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;

// app\assets\background.jpg
