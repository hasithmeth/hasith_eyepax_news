import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import NewsShortCard from "../news-short-card/NewsShortCard";
import moment from "moment";
import { useDispatch } from "react-redux";
import { loadEverything } from "../../redux/actions/newsActions";

export default function NewsShortList({ newsItems }) {
  const dispatch = useDispatch();

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemPadding}>
        <NewsShortCard
          author={item.source?.name}
          date={moment(item.publishedAt).format("dddd, DD MMM YYYY")}
          title={item.title}
          imageURL={item.urlToImage}
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
      showsVerticalScrollIndicator={false}
      onEndReached={() => {
        dispatch(loadEverything());
      }}
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
