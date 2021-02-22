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
  const renderItem = 

  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Link to={`/`}>
          <Text>홈으로</Text>
        </Link>
      </TouchableOpacity>
      <Link to={`/detail`}>
        <FlatList
          data={videos}
          renderItem={({ item }) => (
            <VideoItem video={item} onVideoClick={onVideoClick} />
          );}
          keyExtractor={(item) => item.id}
        />
      </Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default VideoList;
