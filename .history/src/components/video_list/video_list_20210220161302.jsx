import React from "react";
import { View, FlatList } from "react-native";
import VideoItem from "../video_item/video_item";

const VideoList = (props) => {
  const DATA = props.videos;
  const renderItem = ({ item }) => <VideoItem video={item} />;
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default VideoList;
