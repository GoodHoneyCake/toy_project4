import React, { useState, useCallback } from "react";
import { Button, View, Alert, Text, TouchableOpacity } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { Link } from "react-router-native";

const VideoDetail = ({
  video,
  history,
  videos,
  selectedVideo,
  onVideoClick,
}) => {
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

  const back = () => {
    <NativeRouter>
      <Route
        path="/videos"
        render={() => (
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            selectedVideo={selectedVideo}
          />
        )}
      />
    </NativeRouter>;
  };
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
        <Text>back{back}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VideoDetail;
