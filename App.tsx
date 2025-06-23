import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ScrollScreen from "./screens/ScrollScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Tela Principal",
            headerStyle: { backgroundColor: "#007bff" },
            headerTintColor: "#fff",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: "Detalhes",
            headerStyle: { backgroundColor: "#dc3545" },
            headerTintColor: "#fff",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Perfil",
            headerStyle: { backgroundColor: "#p4p4p4" },
            headerTintColor: "#3g3g3g3g",
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Scroll"
          component={ScrollScreen}
          options={{
            title: "Scroll",
            headerStyle: { backgroundColor: "#p4p4p4" },
            headerTintColor: "#28y3y3y3y",
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
