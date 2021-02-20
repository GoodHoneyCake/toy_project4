import React from "react";
import { FlatList, View } from "react-native";
import VideoItem from "../video_item/video_item";

const VideoList = (props) => {
  <View>
    <FlatList>
      {props.videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </FlatList>
  </View>;
};

export default VideoList;
