import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <View style={style.container}>
      <TodoList></TodoList>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#0000",
  },
});
