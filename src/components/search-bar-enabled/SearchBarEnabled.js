import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import palette from "../../config/palette";
import SearchIcon from "../../assets/rnSVG/SearchIcon";
import SearchCross from "../../assets/rnSVG/SearchCross";

export default function SearchBarEnabled({
  onPress,
  value = "",
  onChangeText,
  onClearPress,
}) {
  return (
    <TouchableOpacity disabled onPress={onPress} style={styles.container}>
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.text}
            value={value}
            onChangeText={onChangeText}
            placeholder={`Search here...`}
          />
          {value === "" ? (
            <SearchIcon />
          ) : (
            <TouchableOpacity onPress={onClearPress}>
              <SearchCross />
            </TouchableOpacity>
          )}
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
    color: palette.textColor,
    width: "90%",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: palette.borderColor,
    borderRadius: 24,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 16,
    marginRight: 8,
    height: 40,
    width: "100%",
  },
});
