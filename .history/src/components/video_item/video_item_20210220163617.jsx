import React from "react";
import { Image, SafeAreaView, Text } from "react-native";

const VideoItem = (props) => {
  return (
    <SafeAreaView>
      <Image>{props.video.snippet.thumbnails.medium.url}</Image>
    </SafeAreaView>
  );
};

export default VideoItem;
