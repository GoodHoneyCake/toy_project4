import React from "react";
import { View, Text, FlatList } from "react-native";
import VideoItem from "../video_item/video_item";

const VideoList = (props) => {
  const DATA = props.videos;
  const renderItem = ({ video }) => <VideoItem video={video} />;

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({ video }) => {
          <VideoItem //
            video={video}
          />;
        }}
        keyExtractor={(video) => video.id}
      />
    </View>
  );
};

export default VideoList;
