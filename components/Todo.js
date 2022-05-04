import * as React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import Checkbox from "./Checkbox";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { deleteTodoReducer } from "../redux/todosSlice";
import { useDispatch } from "react-redux";

export default function Todo({ id, text, isCompleted, isToday, hour }) {
  const todos = (state) => state.todos.todos;

  const [localHour, setLocalHour] = React.useState(new Date(hour));
  const dispatch = useDispatch();

  const handleDeleteTodo = async () => {
    dispatch(deleteTodoReducer(id));
    try {
      await AsyncStorage.setItem(
        "Todos",
        JSON.stringify(todos.filter((todo) => todo.id !== id))
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Checkbox
          id={id}
          text={text}
          isCompleted={isCompleted}
          isToday={isToday}
          hour={hour}
        />
        <View>
          <Text
            style={
              isCompleted
                ? [
                    styles.text,
                    { textDecorationLine: "line-through", color: "#73737330" },
                  ]
                : [styles.text]
            }
          >
            {text}
          </Text>
          <Text
            style={
              isCompleted
                ? [
                    styles.time,
                    { textDecorationLine: "line-through", color: "#73737330" },
                  ]
                : [styles.time, { color: "#72767a" }]
            }
          >
            {moment(localHour).format("LT")}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={handleDeleteTodo}>
        <AntDesign name="delete" size={22} color="#73737340" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    color: "#737373",
  },
  textPending: {
    marginLeft: 10,
  },
  time: {
    fontSize: 13,
    color: "#a3a3a3",
    fontWeight: "500",
    marginLeft: 10,
  },
});
