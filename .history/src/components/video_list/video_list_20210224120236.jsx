import React from "react";
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
  Button,
} from "react-native";
import { Link } from "react-router-native";
import VideoItem from "../video_item/video_item";

const VideoList = ({ videos, onVideoClick, selectedVideo }) => {
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
      <Button
        title="선택된 영상 초기화"
        onPress={() => {
          onVideoClick(null);
        }}
      />
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default VideoList;
