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
const VideoList = ({ videos, onVideoClick, match }) => {
  const DATA = videos;
  const renderItem = ({ item }) => (
    <VideoItem video={item} onVideoClick={onVideoClick} />
  );

  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Link to={`/`}>
          <Text>뒤로가기</Text>
        </Link>
      </TouchableOpacity>
      <Link to={`/detail${item.id}`}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default VideoList;
