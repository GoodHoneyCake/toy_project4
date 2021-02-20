import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";

const VideoItem = (props) => {
  return (
    <SafeAreaView>
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: "contain",
          flexDirection: "colunm",
          justifyContent: "center",
          alignItems: "center",
        }}
        source={{ uri: props.video.snippet.thumbnails.medium.url }}
      />
      <View>
        <Text>{props.video.snippet.title}</Text>
        <Text>{props.video.snippet.channelTitle}</Text>
      </View>
    </SafeAreaView>
  );
};

export default VideoItem;
