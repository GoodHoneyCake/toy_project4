import React, { useState, useCallback } from "react";
import { Button, View, Alert, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { useHistory } from "react-router-native";

const VideoDetail = ({ video, match }) => {
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

  const history = useHistory();
  const id = match.params.id;

  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={`${video.id}`}
        onChangeState={onStateChange}
      />
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />

      <Text onPress={() => history.push(`/videos${id}`)}>뒤로가기</Text>
    </View>
  );
};

export default VideoDetail;
