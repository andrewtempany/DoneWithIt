import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import AppText from "./app/components/AppText";
import Colours from "./app/config/colours";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./app/components/AppButton";
import WelcomeScreen from "./app/Screens/WelcomeScreen";
import Card from "./app/components/Card";
import ListingDetails from "./app/Screens/ListingDetails";

// import WelcomeScreen from "./app/Screens/WelcomeScreen";
// import ViewImageScreen from "./app/Screens/ViewImageScreen"

export default function App() {
  return (
    <ListingDetails
      Title="Red Jacket For Sale"
      Image={require("./app/assets/jacket.jpg")}
      Subtitle="$100"
      Author="Mosh Hamedani"
    />
  );
}

// const Styles = StyleSheet.create({
//   container: {

//   },
// });
