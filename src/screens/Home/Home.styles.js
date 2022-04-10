import { StyleSheet, Dimensions } from "react-native";
import palette from "../../config/palette";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: palette.white,
  },
  carousel: {
    height: 240,
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
    fontFamily: "new york small",
    fontSize: 18,
    fontWeight: "700",
    color: palette.black,
  },
  textSeeAll: {
    fontFamily: "nunito",
    fontSize: 12,
    fontWeight: "600",
    color: palette.secondary,
    marginRight: 16,
  },
  seeAllLine: {
    flexDirection: "row",
    alignItems: "center",
  },
});
