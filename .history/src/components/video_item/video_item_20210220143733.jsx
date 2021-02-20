import React from "react";
import { Text, View } from "react-native";

const VideoItem = (props) => {
  <View>
    <Text>{props.video.snippet.title}</Text>
  </View>;
};

export default VideoItem;
