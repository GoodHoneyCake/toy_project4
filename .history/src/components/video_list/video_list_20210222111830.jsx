import React from "react";
import { SafeAreaView, FlatList, View, StyleSheet, Button } from "react-native";
import VideoItem from "../video_item/video_item";

const VideoList = ({ props, history }) => {
  const DATA = props.videos;
  const renderItem = ({ item }) => <VideoItem video={item} />;

  return (
    <SafeAreaView>
      <Link to={`/`}>
        <Text>1</Text>
      </Link>
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
