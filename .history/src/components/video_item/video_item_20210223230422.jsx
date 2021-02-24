import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Link } from "react-router-native";

const VideoItem = ({
  video,
  video: { snippet },
  onVideoClick,
  selectedVideo,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.videoContainer}
        onPress={() => onVideoClick(video)}
      >
        {!selectedVideo ? (
          <Image
            style={styles.video}
            source={{ uri: snippet.thumbnails.medium.url }}
          />
        ) : (
          <Link to={`/detail`}>
            <Image
              style={styles.video}
              source={{ uri: snippet.thumbnails.medium.url }}
            />
          </Link>
        )}
      </TouchableOpacity>
      <View style={styles.videoContainer}>
        <Text style={styles.title}>{snippet.title}</Text>
        <Text style={styles.channel}>{snippet.channelTitle}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
  },
  videoContainer: { width: 300 },
  video: {
    width: 300,
    height: 200,
    resizeMode: "contain",
    borderRadius: 5,
  },
  title: { textAlign: "center", fontWeight: "bold" },
  channel: { textAlign: "center", fontSize: 12, color: "gray" },
});

export default VideoItem;
