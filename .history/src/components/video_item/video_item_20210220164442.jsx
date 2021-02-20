import React from "react";
import { Image, SafeAreaView, Text } from "react-native";

const VideoItem = (props) => {
  return (
    <SafeAreaView>
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: "contain",
        }}
        source={{ uri: props.video.snippet.thumbnails.medium.url }}
      />
    </SafeAreaView>
  );
};

export default VideoItem;
