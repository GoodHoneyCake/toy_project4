import React from "react";
import { SafeAreaView, FlatList, View, StyleSheet, Button } from "react-native";
import VideoItem from "../video_item/video_item";
const VideoList = ({ videos, history }) => {
  const DATA = videos;
  const renderItem = ({ item }) => <VideoItem video={item} />;

  const handleBack = () => {
    history.push("/");
  };

  return (
    <SafeAreaView>
      <View>
        <Button onPress={handleBack} title="Back" />
      </View>
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
