import * as React from "react";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Feather} from "@expo/vector-icons";

export default function Checkbox({id, text, isCompleted,isToday, hour}) {
    return isToday ? (
        <TouchableOpacity style={isCompleted ? styles.checked : styles.uncheck}>
            {isCompleted && <Feather name="check" size={19} color="#fff"/>}
        </TouchableOpacity>
    ) : (
        <View style={styles.isToday}>
            <Feather name="clock" size={20} color="#252525" />
        </View>
    );
}

const styles = StyleSheet.create({
    checked: {
        width: 20,
        height: 21,
        marginRight: 13,
        borderRadius: 6,
        backgroundColor: "#72767a",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 15,
        elevation: 5,
    },

    uncheck: {
        width: 20,
        height: 21,
        marginRight: 13,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        borderRadius: 6,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 15,
        shadowColor: "#000",
    },

    isToday: {
        width: 20,
        height: 21,
        marginHorizontal: 10,
        borderRadius: 10,
        marginRight: 13,
        marginLeft: 15,
    },
});
