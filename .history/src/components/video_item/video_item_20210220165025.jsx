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
        source={{ uri: snippet.thumbnails.medium.url }}
      />
      <View>
        <Text>{snippet.title}</Text>
        <Text>{snippet.channelTitle}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default VideoItem;
