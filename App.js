import { StatusBar } from "expo-status-bar";
import React from "react";
import GlobalStyles from "./GlobalStyles";
import {
  StyleSheet,
  Text,
  Image,
  Alert,
  TouchableNativeFeedback,
  View,
  SafeAreaView,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("It has been pressed");

  return (
    <SafeAreaView style={GlobalStyles.basic}>
      <StatusBar style="auto" />
      <Text numberOfLines={1} onPress={handlePress}>
        Open up App.js
      </Text>
      <TouchableNativeFeedback
        onPress={() =>
          Alert.alert("title", "message", [
            { text: "yes", onPress: () => console.log("yes") },
            { text: "no", onPress: () => console.log("no") },
          ])
        }
      >
        <View
          style={{ width: 200, height: 70, backgroundColor: "pink" }}
        ></View>
      </TouchableNativeFeedback>
      <Image
        // blurRadius={1}
        fadeDuration={2000}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/300",
        }}
      />
    </SafeAreaView>
  );
}
