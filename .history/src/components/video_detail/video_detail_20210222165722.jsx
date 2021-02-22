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
  return <View>{video.snippet.thumbnails}</View>;
};

const styles = StyleSheet.create({});
export default VideoDetail;
