import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import ListItem from '../components/ListItem'
import colours from "../config/colours";

function ListingDetailsScreen({
  image,
  title,
  subtitle,
  profilePic,
  profileName,
  listings,
}) {
  return (
    <View style={Styles.container}>
      <Image source={image} style={Styles.image}></Image>
      <View style={Styles.textContainer}>
        <Text style={Styles.title}>{title}</Text>
        <Text style={Styles.subtitle}>{subtitle}</Text>
      </View>
      <ListItem
        profilePic={profilePic}
        title={profileName}
        subtitle={listings}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.white,
  },
  image: {
    maxHeight: "35%",
    maxWidth: "100%",
  },
  profileContainer: {
    flexDirection: "row",
    marginLeft: "7.5%",
  },
  profilePic: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  profileTextContainer: {
    marginLeft: 20,
    paddingTop: 0,
    height: 60,
    justifyContent: "center",
  },
  profileSubtext: {
    color: "grey",
  },
  subtitle: {
    color: colours.secondary,
    marginLeft: "5%",
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  textContainer: {
    margin: "7.5%",
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: "400",
    marginLeft: "5%",
    fontSize: 16,
  },
});

export default ListingDetailsScreen;
