import React from "react";
import { Text, View } from "react-native";

const VideoItem = (props) => {
  return (
    <View>
      <Text>{props.videos.snippet.title}</Text>
    </View>
  );
};

export default VideoItem;
