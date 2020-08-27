import React from "react";
import Colours from "../config/colours";
import { View, StyleSheet, Image, Text } from "react-native";
function ListingDetails({ image, title, subtitle, author }) {
  <View style={Styles.container}>
    <Image source={image}></Image>
    <View>
      <Text style={Styles.title}>{title}</Text>
      <Text style={Styles.subtitle}>{subtitle}</Text>
    </View>
  </View>;
}

export default ListingDetails;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 0.4,
  },
  subtitle: {
    color: Colours.secondary,
    marginLeft: "5%",
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: "400",
    marginLeft: "5%",
    marginTop: -20,
    fontSize: 16,
  },
});
