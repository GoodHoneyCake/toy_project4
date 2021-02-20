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

        <View>
          <Text style={styles.title}>{snippet.title}</Text>
          <Text style={styles.channel}>{snippet.channelTitle}</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { display: "flex", alignItems: "center" },
  videoContainer: { width: 200 },
  video: {
    width: 200,
    height: 150,
    resizeMode: "contain",
  },
  title: { textAlign: "center" },
  channel: { fontSize: 12 },
});

export default VideoItem;
