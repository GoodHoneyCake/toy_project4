import React from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import VideoItem from "../video_item/video_item";

const VideoList = (props) => {
  const DATA = props.videos;
  const renderItem = ({ video }) => <VideoItem video={video} />;

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(video) => video.id}
      />
    </SafeAreaView>
  );
};

export default VideoList;
