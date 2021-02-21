import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const DetailView = ({ match, history }) => {
  const handleBack = () => {
    history.goBack();
  };
  const id = match.params.id;

  return (
    <>
      <View>
        <Button onPress={handleBack} title="Back" />
      </View>
      <View style={styles.container}>
        <Text style={styles.heading}>Detail {id}</Text>
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
  heading: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "600",
  },
});

export default DetailView;
