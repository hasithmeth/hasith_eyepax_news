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
    fontFamily: "nunito",
    fontWeight: "700",
    fontSize: 14,
    fontStyle: "italic",
  },
  textStatusLabel: {
    fontFamily: "nunito",
    fontWeight: "400",
    fontSize: 14,
  },
});
