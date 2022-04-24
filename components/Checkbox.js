import * as React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Entypo, AntDesign } from "@expo/vector-icons";

export default function Checkbox({id, text, isCompleted, isToday, hour}) {
    return isToday ? (
        <TouchableOpacity style={isCompleted ? styles.checked : styles.uncheck}>
            {isCompleted && <Entypo name="check" size={16} color="#FAFAFA"/>}
        </TouchableOpacity>
    ) : (
        <View style={styles.isToday}>
            <AntDesign name="hourglass" size={24} color="black" />
        </View>
    );
}

const styles = StyleSheet.create({
    checked: {
        width: 20,
        height: 20,
        marginRight: 13,
        borderRadius: 6,
        backgroundColor: "#262626",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },

    uncheck: {
        width: 20,
        height: 20,
        marginRight: 13,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        borderRadius: 6,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    isToday: {
        width: 10,
        height: 10,
        marginHorizontal: 10,
        marginRight: 13,
        marginLeft: 15,
        content: 'pending'
    },
    textPending:{
        marginRight: 10
    }
});
