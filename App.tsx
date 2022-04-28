import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AddTask from "./screens/AddTask";
import {store} from "./redux/store"
import {Provider} from 'react-redux'

import Home from "./screens/Home";
import Profile from "./screens/Profile";


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Add"
                        component={AddTask}
                        options={{presentation: 'modal'}}
                    />
                    <Stack.Screen
                        name="Profile"
                        component={Profile}
                        options={{presentation: 'modal'}}/>
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
