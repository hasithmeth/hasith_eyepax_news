import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Platform,
} from "react-native";
import React from "react";
import palette from "../../config/palette";
import LinearGradient from "react-native-linear-gradient";
import placeholder from "../../assets/webp/placeholder.webp";

export default function NewsCard({ author, title, summary, imageURL }) {
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
          {author && <Text style={styles.textAuthor}>{`by ${author}`}</Text>}
          <Text style={styles.textTitle}>{title}</Text>
          <View style={styles.bottomContainer}>
            <Text style={styles.textPreview}>{summary}</Text>
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
    height: "100%",
    borderRadius: 8,
    overflow: "hidden",
    width: "100%",
  },
  image: {
    opacity: 1,
  },
  canvas: {
    flex: 1,
    justifyContent: "center",
  },
  textAuthor: {
    fontFamily: Platform.OS === "ios" ? "nunito" : "Nunito-ExtraBold",
    fontWeight: Platform.OS === "ios" ? "800" : undefined,
    fontSize: 10,
    color: palette.white,
    marginHorizontal: 16,
  },
  textTitle: {
    fontFamily:
      Platform.OS === "android" ? "NewYorkMediumBold" : "new york medium",
    fontWeight: Platform.OS === "ios" ? "700" : undefined,
    fontSize: 16,
    color: palette.white,
    marginHorizontal: 16,
  },
  textPreview: {
    fontFamily: Platform.OS === "ios" ? "nunito" : "Nunito-SemiBold",
    fontWeight: Platform.OS === "ios" ? "400" : undefined,
    fontSize: 10,
    color: palette.white,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 16,
    marginHorizontal: 16,
  },
});
