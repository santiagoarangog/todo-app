import * as React from "react";
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import { addTodoReducer } from "../redux/todosSlice";

export default function AddTask() {
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [isToday, setIsToday] = React.useState(false);
  const listTodos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const addTodo = async () => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000000),
      text: name,
      hour: date.toString(),
      isComplited: false,
      isToday: isToday,
    };
    try {
      await AsyncStorage.setItem(
        "@Todos",
        JSON.stringify([...listTodos, newTodo])
      );
      dispatch(addTodoReducer(newTodo));
      console.log("Save todo correctly");
      navigation.goBack();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Task</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Task"
          placeholderTextColor="#00000030"
          onChangeText={(text) => {
            setName(text);
          }}
        ></TextInput>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Hour</Text>
        <DateTimePicker
          value={date}
          mode={"time"}
          is24Hour={true}
          onChange={(event, selectDate) => setDate(selectDate)}
          style={{ width: "80%" }}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Today</Text>
        <Switch
          value={isToday}
          onValueChange={(value) => {
            setIsToday(value);
          }}
        ></Switch>
      </View>
      <TouchableOpacity style={styles.button} onPress={addTodo}>
        <Text style={{ color: "white" }}>Done</Text>
      </TouchableOpacity>
      <Text style={{ color: "#00000060" }}>
        If you disabled today, the task will be considered as tomorrow
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 35,
    marginTop: 10,
    textAlign: "center",
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 24,
  },
  textInput: {
    borderBottomColor: "#00000030",
    borderBottomWidth: 1,
    width: "80%",
    fontSize: 20,
  },
  inputContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 30,
  },
  button: {
    marginTop: 30,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
    height: 46,
    borderRadius: 11,
  },
});
