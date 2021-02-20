import React from "react";
import { View, Text, FlatList } from "react-native";
import VideoItem from "../video_item/video_item";

const VideoList = (props) => {
  return (
    <View>
      <Text>
        {props.videos.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </Text>
    </View>
  );
};

export default VideoList;
