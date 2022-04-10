import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import palette from "../../config/palette";
import { useDispatch } from "react-redux";
import { setSelectedTopic } from "../../redux/actions/topicActions";

export default function TopicTag({ topics }) {
  const dispatch = useDispatch();

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(setSelectedTopic({ topicID: item.id }));
        }}
      >
        <View
          style={
            item.active ? styles.itemSelectedContainer : styles.itemContainer
          }
        >
          <Text style={item.active ? styles.textSelectedItem : styles.textItem}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const ItemSeparatorComponent = () => {
    return <View style={styles.separator} />;
  };

  return (
    <FlatList
      data={topics}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      horizontal={true}
      contentContainerStyle={styles.flatList}
      ItemSeparatorComponent={ItemSeparatorComponent}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    height: 32,
    alignItems: "center",
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: palette.borderColor,
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  itemSelectedContainer: {
    borderWidth: 1,
    borderColor: palette.primary,
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 16,
    backgroundColor: palette.primary,
  },
  textItem: {
    fontFamily: "nunito",
    fontSize: 12,
    fontWeight: "600",
    color: palette.black,
  },
  textSelectedItem: {
    fontFamily: "nunito",
    fontSize: 12,
    fontWeight: "600",
    color: palette.white,
  },
  separator: {
    width: 8,
  },
});
