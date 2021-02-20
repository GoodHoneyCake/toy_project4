import React from "react";
import { View, Text, ScrollView } from "react-native";
import VideoItem from "../video_item/video_item";

const VideoList = (props) => {
  return (
    <ScrollView>
      <Text>
        {props.videos.map((video) => (
          <VideoItem key={video.id} video={video} />
        ))}
      </Text>
    </ScrollView>
  );
};

export default VideoList;
