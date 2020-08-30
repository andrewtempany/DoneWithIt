import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ListingDetailsScreen from "./app/Screens/ListingDetailsScreen";

// import AppText from "./app/components/AppText";
// import Colours from "./app/config/colours";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import AppButton from "./app/components/AppButton";
// import WelcomeScreen from "./app/Screens/WelcomeScreen";
// import Card from "./app/components/Card";

// import WelcomeScreen from "./app/Screens/WelcomeScreen";
// import ViewImageScreen from "./app/Screens/ViewImageScreen"

export default function App() {
  return (
    <View style={Styles.container}>
      <ListingDetailsScreen
        image={require("./app/assets/jacket.jpg")}
        title="Red Jacket For Sale"
        subtitle="$100"
        profilePic={require("./app/assets/mosh.jpg")}
        profileName="Mosh Hamedani"
        listings="5 Listings"
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "dodgerblue",
  },
});
