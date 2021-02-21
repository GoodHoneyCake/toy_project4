import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import VideoItem from "../video_item/video_item";

const VideoList = ({ props, match, history }) => {
  const DATA = props.videos;
  const renderItem = ({ item }) => <VideoItem video={item} />;
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default VideoList;
