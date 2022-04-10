import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import palette from "../../config/palette";
import SearchIcon from "../../assets/rnSVG/SearchIcon";

export default function SearchBar({ onPress, value = "" }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <View style={styles.inputContainer}>
          <Text style={styles.text} editable={false}>
            {value === "" ? `Search here...` : value}
          </Text>
          <SearchIcon />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: Platform.OS === "ios" ? "nunito" : "Nunito-SemiBold",
    fontWeight: Platform.OS === "ios" ? "600" : undefined,
    fontSize: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: palette.placeholderText,
    opacity: 0.4,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: palette.borderColor,
    borderRadius: 16,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 16,
    marginRight: 8,
  },
});
