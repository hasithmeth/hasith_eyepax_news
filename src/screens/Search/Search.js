import { Text, View } from "react-native";
import React from "react";
import SearchStyles from "./Search.styles";
import SearchBarEnabled from "../../components/search-bar-enabled/SearchBarEnabled";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSearchTerm,
  setSearchTerm,
} from "../../redux/actions/searchActions";
import TopicTag from "../../components/topic-tag/TopicTag";

export default function Search({ navigation }) {
  const dispatch = useDispatch();

  const { searchTerm } = useSelector((state) => state.searchReducer);
  const { topics } = useSelector((state) => state.topicReducer);

  const handleSearchTextChange = (text) => {
    dispatch(setSearchTerm({ searchTerm: text }));
  };

  const handleClearPress = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <View style={SearchStyles.container}>
      <View style={SearchStyles.searchBar}>
        <SearchBarEnabled
          value={searchTerm}
          onChangeText={handleSearchTextChange}
          onClearPress={handleClearPress}
        />
      </View>
      <View style={SearchStyles.topics}>
        <TopicTag topics={topics} />
      </View>
      {searchTerm !== "" ? (
        <View style={SearchStyles.statusLine}>
          <Text
            style={SearchStyles.textStatusLabel}
          >{`About ${100} results for`}</Text>
          <Text style={SearchStyles.textSearchTerm}> {`${searchTerm}.`}</Text>
        </View>
      ) : null}
    </View>
  );
}
