import React from "react";
import { View, StyleSheet, Text } from "react-native";

const VideoDetail = ({ video }) => {
  return (
    <View>
      <Text>{video.snippet.channelTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default VideoDetail;
