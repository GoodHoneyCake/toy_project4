import React from "react";
import { SafeAreaView, FlatList, Button } from "react-native";
import { useHistory } from "react-router-native";
import VideoItem from "../video_item/video_item";

const VideoList = ({ videos, onVideoClick, selectedVideo }) => {
  const history = useHistory();

  const renderItem = ({ item }) => (
    <VideoItem
      video={item}
      onVideoClick={onVideoClick}
      selectedVideo={selectedVideo}
    />
  );

  return (
    <SafeAreaView>
      <Button
        color="green"
        title="Go Back"
        onPress={() => {
          history.push("/");
        }}
      />
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default VideoList;
