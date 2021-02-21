import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  Dimensions,
} from "react-native";
import { data } from "../data";

const deviceWidth = Dimensions.get("window").width;

const DetailView = ({ match, history }) => {
  const handleBack = () => {
    history.goBack();
  };
  const id = match.params.id;
  const detail = data[id - 1];
  const { title, artist, createAt, collector, contents, imgSrc } = detail;
  return (
    <>
      <View>
        <Button onPress={handleBack} title="Back" />
      </View>
      <View style={styles.container}>
        <Image style={styles.img} source={imgSrc} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
});
export default DetailView;
