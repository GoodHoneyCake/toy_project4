import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  StyleSheet,
  Button,
  Text,
} from "react-native";
import { data } from "../data";

const VideoList = ({ match, history }) => {
  // const DATA = match.params.videos;
  // const renderItem = ({ item }) => <VideoItem video={item} />;
  const handleBack = () => {
    history.goBack();
  };

  const id = match.parmas.id;
  const detail = data[id - 1];
  const { imgSrc } = detail;

  return (
    <SafeAreaView>
      <View>
        <Button onPress={handleBack} title="Back" />
      </View>
      <View style={styles.container}>
        <Image style={styles.img} source={imgSrc} resizeMode="contain" />
      </View>
      {/* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
});

export default VideoList;
