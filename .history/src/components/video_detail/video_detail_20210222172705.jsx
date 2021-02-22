import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";

const VideoDetail = ({ video }) => {
  return (
    <View>
      <Text>{video.snippet.channelTitle}</Text>
      <TouchableOpacity>
        <Link to={`/`}>
          <Text>홈으로</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
export default VideoDetail;
