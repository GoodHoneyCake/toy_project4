import React from "react";
import { FlatList, Text, View } from "react-native";

const VideoItem = (props) => {
  return <View>{props.video.snippet.title}}</View>;
};

export default VideoItem;
