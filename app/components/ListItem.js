import React from 'react';
import Constants from 'expo-constants'
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableHighlight
} from 'react-native';
import Colours from '../config/colours';
import Swipeable from 'react-native-gesture-handler/Swipeable'

function ListItem({ title, subtitle, profilePic, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={Colours.light}
                onPress={onPress}>
                <View style={Styles.profileContainer}>
                    <Image source={profilePic} style={Styles.profilePic}></Image>
                    <View style={Styles.profileTextContainer}>
                        <Text>{title}</Text>
                        <Text style={Styles.profileSubtext}>{subtitle}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}



const Styles = StyleSheet.create({

    profileContainer: {
        flexDirection: "row",
        // marginLeft: "7.5%",
        padding: 20
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
});

export default ListItem;