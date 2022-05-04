import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTask from "./screens/AddTask";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Onboarding from "./screens/Onboarding";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Add"
            component={AddTask}
            options={{ presentation: "modal" }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ presentation: "modal" }}
          />
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              headerShown: false,
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
