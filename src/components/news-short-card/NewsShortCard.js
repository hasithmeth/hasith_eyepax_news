import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import palette from "../../config/palette";
import LinearGradient from "react-native-linear-gradient";
import placeholder from "../../assets/webp/placeholder.webp";

export default function NewsShortCard({ author, title, date, imageURL }) {
  const gradientMap = ["rgba(98, 98, 98, 0.35)", "#000000"];

  return (
    <View style={styles.primaryContainer}>
      <ImageBackground
        source={imageURL ? { uri: imageURL } : placeholder}
        style={styles.container}
        resizeMode={"cover"}
        imageStyle={styles.image}
      >
        <LinearGradient
          colors={gradientMap}
          style={styles.canvas}
          start={{ x: 0.5, y: 0.6 }}
          end={{ x: 0.5, y: 1 }}
        >
          <Text style={styles.textTitle}>{title}</Text>
          <View style={styles.bottomContainer}>
            <Text style={styles.textAuthor}>{author}</Text>
            <Text style={styles.textDate}>{date}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  primaryContainer: {
    width: Dimensions.get("window").width - 20,
  },
  container: {
    height: 128,
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
  },
  image: {
    opacity: 1,
  },
  canvas: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  textAuthor: {
    fontFamily: "nunito",
    fontWeight: "600",
    fontSize: 12,
    color: palette.white,
    marginHorizontal: 16,
  },
  textTitle: {
    fontFamily: "new york small",
    fontWeight: "600",
    fontSize: 14,
    color: palette.white,
    marginHorizontal: 16,
  },
  textDate: {
    fontFamily: "nunito",
    fontWeight: "600",
    fontSize: 12,
    color: palette.white,
    marginRight: 16,
  },
  bottomContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
