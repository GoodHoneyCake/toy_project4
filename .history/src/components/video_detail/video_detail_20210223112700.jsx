import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert, TouchableOpacity, Text } from "react-native";
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
      <TouchableOpacity>
        <Link to={`/`}>
          <Text>홈으로</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default VideoDetail;

{
  /* <iframe
  id="ytplayer"
  type="text/html"
  width="720"
  height="405"
  src="https://www.youtube.com/embed/M7lc1UVf-VE"
  frameborder="0"
  allowfullscreen
></iframe>; */
}
