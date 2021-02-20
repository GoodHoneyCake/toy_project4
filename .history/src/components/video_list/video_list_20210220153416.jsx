import React from "react";
import { View, Text, FlatList } from "react-native";
import VideoItem from "../video_item/video_item";

const VideoList = (props) => {
  const DATA = props.videos;
  const renderItem = ({ DATA }) => <VideoItem video={DATA} />;

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(video) => video.id}
      />
    </View>
  );
};

export default VideoList;
