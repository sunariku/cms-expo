import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Profile = ({ namaLengkap }) => {
  const [count, setCount] = useState(0);
  const [isMessageShow, setIsMessageShow] = useState(false);

  return (
    <View>
      <Text style={styles.text}>Profile Component Success : {namaLengkap}</Text>
      <Text style={styles.text}>Nilai Count: {count}</Text>
      <Button title="Click Me" onPress={() => setCount(count + 1)}></Button>
      <Text style={styles.text}>
        {count >= 5 ? "Count Sudah Dipanggil Lebih Dari 5" : ""}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({ text: { color: "#fff" } });

export default Profile;
