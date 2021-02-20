import React from "react";
import { SafeAreaView, Text } from "react-native";

const VideoItem = (props) => {
  return (
    <SafeAreaView>
      <Text>{props.video.snippet.title}</Text>
    </SafeAreaView>
  );
};

export default VideoItem;
