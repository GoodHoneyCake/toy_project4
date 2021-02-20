import React from "react";
import { Image, SafeAreaView, Text } from "react-native";

const VideoItem = (props) => {
  return (
    <SafeAreaView>
      <Image
        style={{
          width: 51,
          height: 51,
          resizeMode: "contain",
        }}
        source={props.video.snippet.thumbnails.medium.url}
      />
    </SafeAreaView>
  );
};

export default VideoItem;
