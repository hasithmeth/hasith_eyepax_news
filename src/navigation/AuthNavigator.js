import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login/Login";
import Register from "../screens/Register/Register";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  const defaultOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      <Stack.Screen name="LOGIN" component={Login} />
      <Stack.Screen name="REGISTER" component={Register} />
    </Stack.Navigator>
  );
}
