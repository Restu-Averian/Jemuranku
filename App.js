import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddClothesline from "./src/screens/AddClothesline";
import Home from "./src/screens/Home";

export default function App() {
  const Stack = createStackNavigator();

  return (
    // <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="AddClothesline" component={AddClothesline} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
    // </View>
  );
}
