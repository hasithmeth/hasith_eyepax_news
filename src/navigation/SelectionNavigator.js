import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserNavigator from "./UserNavigator";
import Profile from "../screens/Profile/Profile";

const Tabs = createBottomTabNavigator();

export default function SelectionNavigator() {
  const defaultOptions = {
    headerShown: false,
  };
  return (
    <Tabs.Navigator screenOptions={defaultOptions}>
      <Tabs.Screen name="MAIN" component={UserNavigator} />
      <Tabs.Screen name="PROFILE" component={Profile} />
    </Tabs.Navigator>
  );
}
