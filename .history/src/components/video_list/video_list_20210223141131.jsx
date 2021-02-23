import React from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
} from "react-native";
import { Link } from "react-router-native";
import VideoItem from "../video_item/video_item";

const VideoList = ({ video, videos, onVideoClick, selectedVideo }) => {
  const renderItem = ({ item }) => (
    <VideoItem
      video={item}
      onVideoClick={onVideoClick}
      selectedVideo={selectedVideo}
    />
  );

  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Link to={`/`}>
          <Text>홈으로</Text>
        </Link>
      </TouchableOpacity>

      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onRefresh={onVideoClick(video)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default VideoList;
