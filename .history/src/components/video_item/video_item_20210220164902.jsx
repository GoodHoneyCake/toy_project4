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
        source={{ uri: video.thumbnails.medium.url }}
      />
      <View>
        <Text>{video.title}</Text>
        <Text>{video.channelTitle}</Text>
      </View>
    </SafeAreaView>
  );
};

export default VideoItem;
