import React from "react";
import { Image, SafeAreaView, Text } from "react-native";

const VideoItem = (props) => {
  return (
    <SafeAreaView>
      <Image source={require(props.video.snippet.thumbnails.medium.url)} />
    </SafeAreaView>
  );
};

export default VideoItem;
