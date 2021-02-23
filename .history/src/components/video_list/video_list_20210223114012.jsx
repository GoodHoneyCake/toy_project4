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

const VideoList = ({ video, videos, onVideoClick }) => {
  const renderItem = ({ item }) => (
    <VideoItem video={item} onVideoClick={onVideoClick} video={selectVideo} />
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
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default VideoList;
