import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { Link } from "react-router-native";
import { data } from "../data";

const deviceWidth = Dimensions.get("window").width;

const ListView = ({ history }) => {
  // const imgList = data.map((item) => (
  //   <TouchableOpacity style={styles.row} key={item.id} activeOpacity={0.75}>
  //     <Link to={`/videos/${item.id}`}>
  //       <Image
  //         key={item.id}
  //         source={item.imgSrc}
  //         resizeMode="contain"
  //         style={styles.image}
  //       />
  //     </Link>
  //   </TouchableOpacity>
  // ));

  // return <View style={styles.container}>{imgList}</View>;
  return (
    <View>
      <Text>a</Text>
      <Button title="click" onPress={() => history.push("/")} />;
    </View>
  );
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
