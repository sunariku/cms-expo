import React from "react";
import { StyleSheet, Text, View } from "react-native";

const News = () => {
  return (
    <View style={styles.container}>
      <Text>News Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default News;
