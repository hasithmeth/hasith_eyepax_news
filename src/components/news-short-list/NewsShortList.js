import { StyleSheet, FlatList, View, Dimensions } from "react-native";
import React from "react";
import NewsShortCard from "../news-short-card/NewsShortCard";

export default function NewsShortList({ newsItems }) {
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemPadding}>
        <NewsShortCard
          author={item.author}
          date={item.date}
          title={item.title}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={newsItems}
      keyExtractor={(item, index) => {
        return index.toString();
      }}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    paddingBottom: 120,
  },
  itemPadding: {
    marginBottom: 8,
  },
});
