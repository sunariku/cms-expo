import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Profile from "./Profile";

const App = () => {
  return (
    <View style={styles.container}>
      <Profile></Profile>
      <Text style={styles.title}>Pertemuan 2</Text>
      <Profile></Profile>
      <Profile></Profile>
      <Profile></Profile>
      <Profile></Profile>
      <Profile></Profile>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00f",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default App;
