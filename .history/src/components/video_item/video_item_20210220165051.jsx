import React from "react";
import { Image, SafeAreaView, Text, View, StyleSheet } from "react-native";

const VideoItem = ({ video: { snippet } }) => {
  return (
    <SafeAreaView>
      <Image
        style={styles.image}
        source={{ uri: snippet.thumbnails.medium.url }}
      />
      <View>
        <Text>{snippet.title}</Text>
        <Text>{snippet.channelTitle}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: { width: 100, height: 100, resizeMode: "contain" },
});

export default VideoItem;
