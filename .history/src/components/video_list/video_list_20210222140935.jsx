import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { Link } from "react-router-native";
import VideoItem from "../video_item/video_item";
const VideoList = ({ videos }) => {
  const DATA = videos;
  const renderItem = ({ item }) => <VideoItem video={item} />;

  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Link to={`/videos/${item.id}`}>
          <Text></Text>
        </Link>
      </TouchableOpacity>
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
