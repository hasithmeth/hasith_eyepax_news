import { StyleSheet, Platform } from "react-native";
import palette from "../../config/palette";

export default StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? "8%" : "10%",
    flex: 1,
    alignItems: "center",
    backgroundColor: palette.white,
    justifyContent: "center",
  },
  textLogin: {
    fontFamily:
      Platform.OS === "android" ? "NewYorkMediumBold" : "new york medium",
    fontWeight: Platform.OS === "ios" ? "700" : undefined,
    fontSize: 18,
    color: palette.black,
  },
  textLabels: {
    fontFamily: Platform.OS === "ios" ? "nunito" : "Nunito-SemiBold",
    fontWeight: Platform.OS === "ios" ? "600" : undefined,
    fontSize: 14,
    color: palette.black,
  },
  textSubmit: {
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "nunito" : "Nunito-SemiBold",
    fontWeight: Platform.OS === "ios" ? "600" : undefined,
    fontSize: 16,
    color: palette.white,
  },
  submit: {
    marginTop: 20,
    width: 300,
    height: 45,
    backgroundColor: palette.primary,
    borderRadius: 6,
    justifyContent: "center",
    alignItem: "center",
  },
});
