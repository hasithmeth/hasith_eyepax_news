import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import palette from "../config/palette";
import HomeActive from "../assets/rnSVG/HomeActive";
import HomeInactive from "../assets/rnSVG/HomeInactive";
import ProfileActive from "../assets/rnSVG/ProfileActive";
import ProfileInactive from "../assets/rnSVG/ProfileInactive";
import { capitalize } from "lodash";

export default function TabBarDesign({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {isFocused && label === "MAIN" && <HomeActive />}
              {!isFocused && label === "MAIN" && <HomeInactive />}
              {isFocused && label === "PROFILE" && <ProfileActive />}
              {!isFocused && label === "PROFILE" && <ProfileInactive />}
              <Text
                style={{
                  color: isFocused ? palette.primary : palette.textDisabled,
                  marginTop: 4,
                  fontFamily:
                    Platform.OS === "ios" ? "nunito" : "Nunito-SemiBold",
                  fontWeight: Platform.OS === "ios" ? "400" : undefined,
                  fontSize: 10,
                }}
              >
                {capitalize(label)}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 40,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 66,
    backgroundColor: palette.white,
    width: Dimensions.get("window").width - 86,
    alignSelf: "center",
    borderRadius: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
