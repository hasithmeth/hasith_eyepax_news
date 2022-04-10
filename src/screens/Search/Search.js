import { Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import SearchStyles from "./Search.styles";
import SearchBarEnabled from "../../components/search-bar-enabled/SearchBarEnabled";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSearchTerm,
  setSearchTerm,
} from "../../redux/actions/searchActions";
import {
  loadEverythingBySearch,
  setNewsFeed,
} from "../../redux/actions/newsActions";
import TopicTag from "../../components/topic-tag/TopicTag";
import NewsShortList from "../../components/news-short-list/NewsShortList";
import { debounce } from "lodash";

export default function Search({ navigation }) {
  const dispatch = useDispatch();

  const { searchTerm } = useSelector((state) => state.searchReducer);
  const { topics } = useSelector((state) => state.topicReducer);
  const { feed, feedCount } = useSelector((state) => state.newsReducer);

  const handleSearchTextChange = (text) => {
    dispatch(setSearchTerm({ searchTerm: text }));
    dispatch(setNewsFeed({ articlesArray: [] }));
  };

  useEffect(() => {
    debouncedCall(searchTerm);
  }, [searchTerm]);

  const triggerSearch = (key) => {
    if (key !== "") {
      dispatch(loadEverythingBySearch({ searchTerm: key }));
    }
  };

  const [debouncedCall] = useState(() =>
    debounce((key) => triggerSearch(key), 500)
  );

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
          >{`About ${feedCount} results for`}</Text>
          <Text style={SearchStyles.textSearchTerm}> {`${searchTerm}.`}</Text>
        </View>
      ) : null}
      <NewsShortList newsItems={feed} />
    </View>
  );
}
