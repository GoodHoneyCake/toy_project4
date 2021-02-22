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
  const renderItem = ({ item }) => (
    <VideoItem video={item} onVideoClick={onVideoClick} />
  );

  const videoList = videos.map((item) => {
    <TouchableOpacity key={item.id} activeOpacity={0.75}>
      <Link to={`/detail`}>
        <Text key={item.id}>detail</Text>
      </Link>
    </TouchableOpacity>;
  });

  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Link to={`/`}>
          <Text>홈으로</Text>
        </Link>
      </TouchableOpacity>
      <Text>asd{videoList}</Text>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default VideoList;
