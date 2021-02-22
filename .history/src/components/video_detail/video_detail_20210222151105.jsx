import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  Dimensions,
} from "react-native";
import VideoList from "../video_list/video_list";
// import { data } from "../data";

// const deviceWidth = Dimensions.get("window").width;

const VideoDetail = () => {
  return (
    <View>
      <Text>{video.snippet.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   flexDirection: "column",
  // },
  // img: {
  //   height: (deviceWidth * 2) / 3,
  //   width: (deviceWidth * 2) / 3,
  //   borderRadius: 20,
  // },
});
export default VideoDetail;
