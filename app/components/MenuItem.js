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
import { MaterialCommunityIcons } from '@expo/vector-icons'

function MenuItem({ title, img, onPress, iconName, iconColour }) {
    return (
        <TouchableHighlight
            underlayColor={Colours.light}
            onPress={onPress}>
            <View style={Styles.container}>
                <View style={[Styles.icon, { backgroundColor: iconColour }]}>
                    <MaterialCommunityIcons name={iconName} size={20} color={Colours.white} />
                </View>
                <View style={Styles.textContainer}>
                    <Text>{title}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
}



const Styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        // marginLeft: "7.5%",
        padding: 5,
        paddingLeft: 20,
        alignItems: "center",
    },
    icon: {
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    textContainer: {
        marginLeft: 20,
        paddingTop: 0,
        height: 60,
        justifyContent: "center",
    },
});

export default MenuItem;