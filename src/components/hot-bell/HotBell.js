import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import palette from "../../config/palette";
import BellIcon from "../../assets/rnSVG/BellIcon";

export default function HotBell({ notificationOn = true, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {notificationOn ? <View style={styles.notification} /> : null}
        <BellIcon />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 32,
    width: 32,
    borderRadius: 16,
    backgroundColor: palette.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  notification: {
    height: 6,
    width: 6,
    backgroundColor: palette.tertiary,
    borderRadius: 3,
    position: "absolute",
    right: 9,
    top: 7,
  },
});
