import React from "react";
import { View, Text, FlatList } from "react-native";
import VideoItem from "../video_item/video_item";

const VideoList = (props) => {
  return (
    <View>
      <Text>
        {props.videos.map((video) => (
          <VideoList video={video} />
        ))}
      </Text>
    </View>
  );
};

export default VideoList;

{
  /* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(video) => video.id}
      /> */
}
//   const DATA = props.videos;
//   const renderItem = ({ video }) => <VideoItem video={video} />;
