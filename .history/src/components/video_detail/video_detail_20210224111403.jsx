import React, { useState, useCallback } from "react";
import {
  Button,
  View,
  Alert,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { Link } from "react-router-native";

const VideoDetail = ({ video }) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={`${video.id}`}
        onChangeState={onStateChange}
      />
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />

      <Text
        style={{ color: "blue" }}
        onPress={() => Linking.openURL("/videos")}
      >
        뒤로가기
      </Text>
    </View>
  );
};

export default VideoDetail;
