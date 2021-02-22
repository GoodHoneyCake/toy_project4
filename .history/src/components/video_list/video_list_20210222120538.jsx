import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  StyleSheet,
  Button,
  Text,
  Dimensions,
  Image,
} from "react-native";
import { Link } from "react-router-native";

import VideoItem from "../video_item/video_item";

const VideoList = ({ match, history }) => {
  const DATA = match.params.videos;
  const renderItem = ({ item }) => <VideoItem video={item} />;
  const handleBack = () => {
    history.goBack();
  };

  const id = match.parmas.id;
  const { text } = id;

  return (
    <SafeAreaView>
      <View>
        <Button onPress={handleBack} title="Back" />
      </View>
      <Text>{text}</Text>
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
