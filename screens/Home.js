import * as React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TodoList from "../components/TodoList";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { hideComplitedReducer, setTodosReducer } from "../redux/todosSlice";
import { globalStyles } from "../styles/global";

export default function Home() {
  const [isSortStart, setIsSort] = React.useState(false);
  const [isHidden, setIsHidden] = React.useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  React.useEffect(() => {
    const getTodos = async () => {
      try {
        const todos = await AsyncStorage.getItem("@Todos");
        if (todos !== null) {
          dispatch(setTodosReducer(JSON.parse(todos)));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getTodos();
  }, []);

  const handleSort = () => {
    if (!isSortStart) {
      setIsSort(true);
      return;
    }
    setIsSort(false);
  };

  const [localData, setLocalData] = React.useState(todos);

  const handleHidePress = async () => {
    if (isHidden) {
      setIsHidden(false);
      const todos = await AsyncStorage.getItem("@Todos");
      if (todos != null) {
        dispatch(setTodosReducer(JSON.parse(todos)));
      }
      return;
    }
    setIsHidden(!isHidden);
    dispatch(hideComplitedReducer());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profile");
        }}
      >
        <Image
          source={{
            uri: "https://media-exp1.licdn.com/dms/image/C5603AQG_q5BWShIb_A/profile-displayphoto-shrink_200_200/0/1611847931174?e=1656547200&v=beta&t=C3OdfY3H4eY3g-72ZLvJannpRiJlhbd9uh6FfoUHVGQ",
          }}
          style={styles.pic}
        />
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={[globalStyles.title, globalStyles.fontColor]}>
          <Feather
            name="chevron-right"
            size={24}
            color={globalStyles.fontColor}
          />{" "}
          Today
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
            style={[
              globalStyles.primaryColor,
              {
                fontWeight: "bold",
              },
            ]}
          >
            {isHidden ? "Show completed" : "Hide completed"}
          </Text>
        </TouchableOpacity>
      </View>
      <TodoList todosData={todos.filter((item) => item.isToday)} />

      <Text style={styles.title}>
        <Feather name="chevron-right" size={24} color="black" /> Tomorrow
      </Text>
      <TodoList todosData={todos.filter((item) => !item.isToday)} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Add")}
      >
        <Feather name="plus" size={41} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 40,
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
    shadowRadius: 15,
    elevation: 10,
  },

  plus: {
    fontSize: 40,
    color: "#fff",
    position: "absolute",
    top: -10,
    left: 8,
  },
});
