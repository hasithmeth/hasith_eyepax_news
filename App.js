import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { Store, persistor } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import UserNavigator from "./src/navigation/UserNavigator";

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <UserNavigator />
          </NavigationContainer>
        </PersistGate>
      </Provider>
      <Toast />
    </>
  );
};

export default App;
