import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";

const VideoItem = ({ video: { snippet } }) => {
  return (
    <SafeAreaView>
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: "contain",
        }}
        source={{ uri: video.snippet.thumbnails.medium.url }}
      />
      <View>
        <Text>{video.snippet.title}</Text>
        <Text>{video.snippet.channelTitle}</Text>
      </View>
    </SafeAreaView>
  );
};

export default VideoItem;
