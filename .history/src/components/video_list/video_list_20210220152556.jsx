import React from "react";
import { View, Text, FlatList } from "react-native";
import VideoItem from "../video_item/video_item";

const DATA = props.videos;

const VideoList = (props) => {
  renderItem = ({ video }) => <VideoItem video={video} />;

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
