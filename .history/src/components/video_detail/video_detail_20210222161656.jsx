import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  Dimensions,
} from "react-native";

const VideoDetail = ({ video }) => {
  return (
    <View>
      <Text>{video.snippet.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default VideoDetail;
