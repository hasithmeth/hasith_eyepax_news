import { View, Dimensions, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import NewsCard from "../../components/news-card/NewsCard";
import HomeStyles from "./Home.styles";
import Carousel from "react-native-snap-carousel";
import SearchBar from "../../components/search-bar/SearchBar";
import HotBell from "../../components/hot-bell/HotBell";
import NextArrow from "../../assets/rnSVG/NextArrow";
import { SafeAreaView } from "react-native-safe-area-context";
import TopicTag from "../../components/topic-tag/TopicTag";
import { useDispatch, useSelector } from "react-redux";
import NewsShortList from "../../components/news-short-list/NewsShortList";
import { loadEverything, loadHeadlines } from "../../redux/actions/newsActions";
import { setCountry } from "../../redux/actions/authActions";
import { useIsFocused } from "@react-navigation/native";

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const { topics } = useSelector((state) => state.topicReducer);
  const { searchTerm } = useSelector((state) => state.searchReducer);
  const { headlines, feed } = useSelector((state) => state.newsReducer);

  const [notificationsOn, setNotificationsOn] = useState(true);

  useEffect(() => {
    dispatch(loadHeadlines());
    dispatch(loadEverything());
  }, []);

  useEffect(() => {
    if (isFocused) dispatch(loadHeadlines());
  }, [isFocused]);

  const carouselRenderItem = ({ item, index }) => {
    return (
      <NewsCard
        author={item.author}
        title={item.title}
        summary={item.description}
        imageURL={item.urlToImage}
      />
    );
  };

  const deviceWidth = Dimensions.get("window").width;

  const handleSearchOnPress = () => {
    navigation.navigate("SEARCH");
  };

  const handleBellIconPress = () => {
    setNotificationsOn(!notificationsOn);
  };

  const handleSeeAllPress = () => {
    dispatch(setCountry({ countryCode: "us" }));
    dispatch(loadHeadlines());
  };

  return (
    <View style={HomeStyles.container}>
      <View style={HomeStyles.searchLine}>
        <SearchBar value={searchTerm} onPress={handleSearchOnPress} />
        <HotBell
          notificationOn={notificationsOn}
          onPress={handleBellIconPress}
        />
      </View>
      <View style={HomeStyles.lastestNewLine}>
        <Text style={HomeStyles.textLastestNews}>{`Lastest News`}</Text>
        <TouchableOpacity onPress={handleSeeAllPress}>
          <View style={HomeStyles.seeAllLine}>
            <Text style={HomeStyles.textSeeAll}>{`See All`}</Text>
            <NextArrow />
          </View>
        </TouchableOpacity>
      </View>
      <View style={HomeStyles.carousel}>
        <Carousel
          data={headlines}
          renderItem={carouselRenderItem}
          layout={"stack"}
          sliderWidth={deviceWidth}
          itemWidth={deviceWidth - 20}
        />
      </View>
      <View style={HomeStyles.topics}>
        <TopicTag topics={topics} />
      </View>
      <NewsShortList newsItems={feed} />
    </View>
  );
}
