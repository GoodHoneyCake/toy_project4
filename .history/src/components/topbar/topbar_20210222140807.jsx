import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { withRouter } from "react-router-native";

const TopBar = ({ location }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {location.pathname === "/" ? "국가 선택!" : "지금 현재 인기 동영상 순위"}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    height: 100,
    flexDirection: "row", // row
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center", // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    paddingTop: 20,
    fontSize: 20,
  },
});

export default withRouter(TopBar);
