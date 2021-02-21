import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>인기 급상승 유튜브 동영상 100개</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    height: 50,
    flexDirection: "row",
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    paddingTop: 20,
    fontSize: 20,
  },
});

export default TopBar;
