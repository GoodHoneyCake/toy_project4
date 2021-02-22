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
  // const handleBack = () => {
  //   history.goBack();
  // };
  // const id = match.params.id;
  // const detail = data[id - 1];
  // const { imgSrc } = detail;
  return (
    <>
      <Text>{video.snippet.title}</Text>
      {/* <View>
        <Button onPress={handleBack} title="Back" />
      </View>
      <View style={styles.container}>
        <Image style={styles.img} source={imgSrc} />
      </View> */}
    </>
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
