import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home/Home";
import Search from "../screens/Search/Search";

const Stack = createStackNavigator();

export default function UserNavigator() {
  const defaultOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen name="HOME" component={Home} />
      <Stack.Screen name="SEARCH" component={Search} />
    </Stack.Navigator>
  );
}
