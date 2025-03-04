import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import CollageScreen from "./screens/CollageScreen";
import { Image, StyleSheet, View } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Collage" component={CollageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
