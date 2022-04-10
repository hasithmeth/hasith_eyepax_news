import { View, Dimensions, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import NewsCard from "../../components/news-card/NewsCard";
import HomeStyles from "./Home.styles";
import Carousel from "react-native-snap-carousel";
import SearchBar from "../../components/search-bar/SearchBar";
import HotBell from "../../components/hot-bell/HotBell";
import NextArrow from "../../assets/rnSVG/NextArrow";
import { SafeAreaView } from "react-native-safe-area-context";
import TopicTag from "../../components/topic-tag/TopicTag";
import { useSelector } from "react-redux";
import NewsShortList from "../../components/news-short-list/NewsShortList";

export default function Home({ navigation }) {
  const postInfo = {
    author: "Ryan Browne",
    title:
      "Crypto investors should be \nprepared to lose all their money, \nBOE governor says",
    summary:
      "“I’m going to say this very bluntly again,” he added. “Buy them only if you’re prepared to lose all your money.”",
    date: "Sunday 9, May 2021",
  };

  const data = [postInfo, postInfo, postInfo];

  const { topics } = useSelector((state) => state.topicReducer);
  const { searchTerm } = useSelector((state) => state.searchReducer);

  const [notificationsOn, setNotificationsOn] = useState(true);

  const carouselRenderItem = ({ item, index }) => {
    return (
      <NewsCard
        author={item.author}
        title={item.title}
        summary={item.summary}
      />
    );
  };

  const deviceWidth = Dimensions.get("window").width;

  const handleSearchOnPress = () => {
    navigation.navigate("SEARCH");
  };

  const handleBellIconPress = () => {
    console.log("bell pressed");
    setNotificationsOn(!notificationsOn);
  };

  const handleSeeAllPress = () => {
    console.log("see all pressed");
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
          data={data}
          renderItem={carouselRenderItem}
          layout={"stack"}
          sliderWidth={deviceWidth}
          itemWidth={deviceWidth - 20}
        />
      </View>
      <View style={HomeStyles.topics}>
        <TopicTag topics={topics} />
      </View>
      <NewsShortList newsItems={data} />
    </View>
  );
}
