import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  StyleSheet,
  Button,
  Image,
  Dimensions,
} from "react-native";
import VideoItem from "../video_item/video_item";

const deviceWidth = Dimensions.get("window").width;

const VideoList = (props) => {
  const DATA = props.videos;
  const renderItem = ({ item }) => <VideoItem video={item} />;

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  img: {
    height: (deviceWidth * 2) / 3,
    width: (deviceWidth * 2) / 3,
    borderRadius: 20,
  },
});

export default VideoList;
