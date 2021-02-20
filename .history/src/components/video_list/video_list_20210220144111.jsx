import React from "react";
import { View, Text, ListView } from "react-native";
import VideoItem from "../video_item/video_item";

const VideoList = (props) => {
  return (
    <ListView>
      <Text>
        {props.videos.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </Text>
    </ListView>
  );
};

export default VideoList;
