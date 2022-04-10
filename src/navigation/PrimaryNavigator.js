import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import AuthNavigator from "./AuthNavigator";
import SelectionNavigator from "./SelectionNavigator";

const Stack = createStackNavigator();

export default function PrimaryNavigator() {
  const { isLoggedIn } = useSelector((state) => state.authReducer);

  const defaultOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={defaultOptions}>
      {isLoggedIn ? (
        <Stack.Screen name="SESSION" component={SelectionNavigator} />
      ) : (
        <Stack.Screen name="AUTH" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
}
