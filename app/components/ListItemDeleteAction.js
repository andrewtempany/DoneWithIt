import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colours from '../config/colours';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListItemDeleteAction({ onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress} style={Styles.container}>
            {/* <View style={Styles.container}> */}
            <MaterialCommunityIcons
                name="trash-can"
                size={35}
                color={Colours.white}
            />
            {/* </View> */}
        </TouchableWithoutFeedback>
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: Colours.danger,
        width: 70,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
})

export default ListItemDeleteAction; 