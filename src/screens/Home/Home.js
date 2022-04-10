import { View, Dimensions, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import NewsCard from "../../components/news-card/NewsCard";
import HomeStyles from "./Home.styles";
import Carousel from "react-native-snap-carousel";
import SearchBar from "../../components/search-bar/SearchBar";
import HotBell from "../../components/hot-bell/HotBell";
import NextArrow from "../../assets/rnSVG/NextArrow";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const postInfo = {
    author: "by Ryan Browne",
    title:
      "Crypto investors should be \nprepared to lose all their money, \nBOE governor says",
    summary:
      "“I’m going to say this very bluntly again,” he added. “Buy them only if you’re prepared to lose all your money.”",
  };

  const data = [postInfo, postInfo, postInfo];

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
    console.log("search pressed");
  };

  const handleBellIconPress = () => {
    console.log("bell pressed");
    setNotificationsOn(!notificationsOn);
  };

  const handleSeeAllPress = () => {
    console.log("see all pressed");
  };

  return (
    <SafeAreaView style={HomeStyles.container}>
      <View style={HomeStyles.searchLine}>
        <SearchBar onPress={handleSearchOnPress} />
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
    </SafeAreaView>
  );
}
