import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import { Link } from "react-router-native";

const deviceWidth = Dimensions.get("window").width;

const ListView = () => {
  const data = [1, 2, 3, 4, 5];

  const imgList = data.map((item, index) => (
    <TouchableOpacity style={styles.row} key={index} activeOpacity={0.75}>
      <Link to={`/detail/${item}`}>
        <Text style={styles.image}>Image {item}</Text>
      </Link>
    </TouchableOpacity>
  ));

  return <View style={styles.container}>{imgList}</View>;
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
    height: deviceWidth / 2,
    marginBottom: 15,
  },
  image: {
    width: deviceWidth / 2,
    height: deviceWidth / 2,
    borderRadius: 20,
  },
});

export default ListView;
