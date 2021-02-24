import React from "react";
import {
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Link } from "react-router-native";
import { data } from "../data";

const deviceWidth = Dimensions.get("window").width;

const ListView = (onVideoClick) => {
  const imgList = data.map((item) => (
    <TouchableOpacity
      style={styles.row}
      key={item.id}
      activeOpacity={0.75}
      }
    >
      <Link to={`/videos`}>
        <Image
          key={item.id}
          source={item.imgSrc}
          resizeMode="contain"
          style={styles.image}
        />
      </Link>
    </TouchableOpacity>
  ));

  return <SafeAreaView style={styles.container}>{imgList}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  row: {
    alignItems: "center",
    backgroundColor: "white",
    width: deviceWidth,
    height: deviceWidth,
    marginBottom: 15,
  },
  image: {
    width: deviceWidth,
    height: deviceWidth,
    borderRadius: 20,
  },
});

export default ListView;
