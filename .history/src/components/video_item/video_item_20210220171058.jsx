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
  videoContainer: { width: 300 },
  video: {
    width: 300,
    height: 200,
    resizeMode: "contain",
    borderRadius: 5,
  },
  title: { textAlign: "center", fontWeight: "bold" },
  channel: { textAlign: "center", fontSize: 12 },
});

export default VideoItem;
