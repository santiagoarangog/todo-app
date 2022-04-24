import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TodoList from "../components/TodoList";
import { todosData } from "../data/todos";
import { Feather } from "@expo/vector-icons";

export default function Home() {
  const [isSortStart, setIsSort] = React.useState(false);

  const handleSort = () => {
    if (!isSortStart) {
      setIsSort(true);
      return;
    }
    setIsSort(false);
  };

  let data = todosData.sort((itemOne, itemTwo) => {
    if (!isSortStart) {
      return itemOne.isCompleted - itemTwo.isCompleted;
    } else {
      return itemTwo.isCompleted - itemOne.isCompleted;
    }
  });

  const [localData, setLocalData] = React.useState(data);

  const [isHidden, setIsHidden] = React.useState(false);

  const handleHidePress = () => {
    if (isHidden) {
      setIsHidden(false);
      setLocalData(data);
      return;
    }
    setIsHidden(!isHidden);
    setLocalData(localData.filter((todo) => !todo.isCompleted));
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://media-exp1.licdn.com/dms/image/C5603AQG_q5BWShIb_A/profile-displayphoto-shrink_200_200/0/1611847931174?e=1656547200&v=beta&t=C3OdfY3H4eY3g-72ZLvJannpRiJlhbd9uh6FfoUHVGQ",
        }}
        style={styles.pic}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>
          <Feather name="chevron-right" size={24} color="black" /> Today
        </Text>
        {isHidden ? (
          <Text />
        ) : (
          <TouchableOpacity onPress={handleSort}>
            {isSortStart ? (
              <Feather name="arrow-down" size={24} color="#3478f6" />
            ) : (
              <Feather name="arrow-up" size={24} color="#3478f6" />
            )}
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={handleHidePress}>
          <Text
            style={{
              color: "#3478f6",
              fontWeight: "bold",
            }}
          >
            {isHidden ? "Show completed" : "Hide completed"}
          </Text>
        </TouchableOpacity>
      </View>
      <TodoList todosData={localData.filter((item) => item.isToday)} />

      <Text style={styles.title}>
        <Feather name="chevron-right" size={24} color="black" /> Tomorrow
      </Text>
      <TodoList todosData={localData.filter((item) => !item.isToday)} />
      <TouchableOpacity style={styles.button}>
        <Feather name="plus" size={40} color="#3478f6" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  pic: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 35,
  },

  button: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#000",
    position: "absolute",
    bottom: 50,
    right: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },

  plus: {
    fontSize: 40,
    color: "#fff",
    position: "absolute",
    top: -10,
    left: 8,
  },
});
