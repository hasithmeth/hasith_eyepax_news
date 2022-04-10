import { StyleSheet, Dimensions, Platform } from "react-native";
import palette from "../../config/palette";

export default StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? "8%" : "10%",
    flex: 1,
    alignItems: "center",
    backgroundColor: palette.white,
  },
  searchBar: {
    marginTop: 10,
    height: 40,
    width: Dimensions.get("window").width - 20,
    marginBottom: 22,
  },
  topics: {
    width: Dimensions.get("window").width - 20,
    alignSelf: "center",
    marginBottom: 32,
  },
  statusLine: {
    width: Dimensions.get("window").width - 20,
    flexDirection: "row",
    marginBottom: 16,
  },
  textSearchTerm: {
    fontFamily:
      Platform.OS === "android" ? "NewYorkMediumBold" : "new york medium",
    fontWeight: Platform.OS === "ios" ? "700" : undefined,
    fontSize: 14,
    fontStyle: Platform.OS === "ios" ? "italic" : undefined,
    color: palette.textColor,
  },
  textStatusLabel: {
    fontFamily: Platform.OS === "ios" ? "nunito" : "Nunito-SemiBold",
    fontWeight: Platform.OS === "ios" ? "400" : undefined,
    fontSize: 14,
    color: palette.textColor,
  },
});
