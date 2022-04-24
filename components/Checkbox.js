import * as React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function Checkbox({ id, text, isCompleted, isToday, hour }) {
  return (
    <TouchableOpacity style={styles.checked}>
      {isCompleted && <Entypo name="check" size={16} color="#FAFAFA"></Entypo>}
    </TouchableOpacity>
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
});
