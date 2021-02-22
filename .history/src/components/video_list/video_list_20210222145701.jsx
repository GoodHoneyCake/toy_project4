import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
import { Link } from "react-router-native";
import VideoItem from "../video_item/video_item";
const VideoList = ({ videos, onVideoClick }) => {
  const DATA = videos;
  const renderItem = ({ item }) => {
    <Link to={`/detail`}>
      <VideoItem video={item} onVideoClick={onVideoClick} />
    </Link>;
  };

  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Link to={`/`}>
          <Text>뒤로가기</Text>
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
