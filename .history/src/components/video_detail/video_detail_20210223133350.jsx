import React, { useState, useCallback } from "react";
import {
  Button,
  View,
  Alert,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { Link } from "react-router-native";

const VideoDetail = ({ video ,onVideoClick}) => {
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
      <TouchableOpacity onPress={()=>}>
        <Link to={`/videos`}>
          <Text>뒤로가기</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default VideoDetail;
