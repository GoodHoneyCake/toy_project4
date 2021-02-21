import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Click the Paintings!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    height: 100,
    flexDirection: "row",
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  text: {
    paddingTop: 20,
    fontSize: 20,
  },
});

export default TopBar;
