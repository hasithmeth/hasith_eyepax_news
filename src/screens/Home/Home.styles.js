import { StyleSheet, Dimensions, Platform } from "react-native";
import palette from "../../config/palette";

export default StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? "8%" : "10%",
    flex: 1,
    alignItems: "center",
    backgroundColor: palette.white,
  },
  carousel: {
    height: 240,
    marginBottom: 24,
  },
  searchLine: {
    flexDirection: "row",
    width: Dimensions.get("window").width - 20,
    marginBottom: 30,
    marginTop: 10,
  },
  lastestNewLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: Dimensions.get("window").width - 20,
    marginBottom: 16,
  },
  textLastestNews: {
    fontFamily:
      Platform.OS === "android" ? "NewYorkMediumBold" : "new york medium",
    fontWeight: Platform.OS === "ios" ? "700" : undefined,
    fontSize: 18,
    color: palette.black,
  },
  textSeeAll: {
    fontFamily: Platform.OS === "ios" ? "nunito" : "Nunito-SemiBold",
    fontWeight: Platform.OS === "ios" ? "600" : undefined,
    fontSize: 12,
    color: palette.secondary,
    marginRight: 16,
  },
  seeAllLine: {
    flexDirection: "row",
    alignItems: "center",
  },
  topics: {
    width: Dimensions.get("window").width - 20,
    marginBottom: 16,
  },
});
