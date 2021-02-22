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

  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Link to={`/`}>
          <Text>홈으로</Text>
        </Link>
      </TouchableOpacity>

      <TouchableOpacity>
        <Link to={`/detail`}>
          <FlatList
            data={videos}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </Link>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default VideoList;
