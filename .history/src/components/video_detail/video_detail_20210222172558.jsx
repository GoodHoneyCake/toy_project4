import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Link } from "react-router-native";

const VideoDetail = ({ video }) => {
  return (
    <View>
      <TouchableOpacity>
        <Link to={`/`}>
          <Text>홈으로</Text>
        </Link>
      </TouchableOpacity>
      <Text>{video.snippet.channelTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default VideoDetail;
