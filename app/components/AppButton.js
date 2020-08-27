import React from "react";
import Colours from "../config/colours";
import {
  Platform,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  StyleSheet,
  View,
} from "react-native";

function AppButton({ title, onPress, colour }) {
  //   console.log("Child ====> ", child);
  if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback onPress={onPress}>
        <View style={[Styles.android, { backgroundColor: Colours[colour] }]}>
          <Text style={Styles.text}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  } else {
    return (
      <TouchableOpacity onPress={() => console.log("Nothing..")}>
        <View style={Styles.ios}>
          <Text style={Styles.text}>{props.children}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default AppButton;

const Styles = StyleSheet.create({
  android: {
    height: 40,
    width: "100%",
    backgroundColor: Colours.primary,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  text: {
    color: Colours.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontFamily: "Roboto",
  },
  ios: {
    height: 40,
    width: "100%",
    backgroundColor: Colours.primary,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: Colours.black,
    shadowOffset: { height: 20, width: 20 },
  },
});
