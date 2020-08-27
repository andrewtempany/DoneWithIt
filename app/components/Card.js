import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colours from "../config/colours";
import AppText from "./AppText";

function Card({ image, title, subtitle }) {
  return (
    <View style={Styles.container}>
      <View>
        <Image style={Styles.image} source={image}></Image>
      </View>
      <View>
        <Text style={Styles.title}>{title}</Text>
        <Text style={Styles.price}>{subtitle}</Text>
      </View>
    </View>
  );
}

export default Card;

const Styles = StyleSheet.create({
  container: {
    margin: "5%",
    flex: 0.4,
    width: "90%",
    backgroundColor: colours.white,
    borderRadius: 20,
  },
  image: {
    width: "100%",
    height: "85%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  price: {
    color: colours.secondary,
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
