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
        width="640"
        height="360"
        src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
        frameborder="0"
      ></iframe>
    </View>
  );
};

const styles = StyleSheet.create({});
export default VideoDetail;
