import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { updateTodoReducer } from "../redux/todosSlice";

export default function Checkbox({ id, text, isCompleted, isToday, hour }) {
  const dispatch = useDispatch();
  const listTodos = useSelector((state) => state.todos.todos);

  const handleCheckbox = () => {
    try {
      dispatch(updateTodoReducer({ id, isCompleted }));
      AsyncStorage.setItem(
        "@Todos",
        JSON.stringify(
          listTodos.map((todo) => {
            if (todo.id === id) {
              return { ...todo, isCompleted: !todo.isCompleted };
            }
            return todo;
          })
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return isToday ? (
    <TouchableOpacity
      onPress={handleCheckbox}
      style={isCompleted ? styles.checked : styles.uncheck}
    >
      {isCompleted && <Feather name="check" size={19} color="#fff" />}
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
