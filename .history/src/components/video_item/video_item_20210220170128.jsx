import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const VideoItem = ({ video: { snippet } }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.videoContainer}>
        <Image
          style={styles.video}
          source={{ uri: snippet.thumbnails.medium.url }}
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>{snippet.title}</Text>
        <Text style={styles.channel}>{snippet.channelTitle}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  videoContainer: { width: 100 },
  video: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  title: {},
  channel: { fontSize: 13 },
});

export default VideoItem;
