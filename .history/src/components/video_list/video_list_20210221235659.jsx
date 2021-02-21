import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import VideoItem from "../video_item/video_item";

const VideoList = (props, { match, history }) => {
  const DATA = props.videos;
  const renderItem = ({ item }) => <VideoItem video={item} />;

  const handleBack = () => {
    history.goBack();
  };
  const id = match.params.id;
  const detail = data[id - 1];
  const { imgSrc } = detail;
  return (
    <SafeAreaView>
      <View>
        <Button onPress={handleBack} title="Back" />
      </View>
      <Image style={styles.img} source={imgSrc} resizeMode="contain" />
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
