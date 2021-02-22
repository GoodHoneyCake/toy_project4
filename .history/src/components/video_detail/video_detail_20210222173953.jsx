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
      <iframe
        id="ytplayer"
        type="text/html"
        width="720"
        height="405"
        src="https://www.youtube.com/embed/M7lc1UVf-VE"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </View>
  );
};

const styles = StyleSheet.create({});
export default VideoDetail;
