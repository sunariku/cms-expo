import React from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Lucide } from "@react-native-vector-icons/lucide";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* User Container */}
        <View style={styles.userContainer}>
          <View style={styles.greetContainer}>
            <Text style={styles.subTitle}>Hi, John</Text>
            <Text style={styles.title}>Good Morning</Text>
          </View>
          <View style={styles.avatarContainer}>
            <Image
              source={require("./assets/user.png")}
              style={{ width: 47, height: 47 }}
            />
          </View>
        </View>
        {/* End User Container */}

        {/* Search Container */}
        <View style={styles.searchContainer}>
          <TextInput placeholder="Search Keyword" style={styles.searchInput} />
          <Pressable style={styles.searchButton}>
            <Lucide name="search" size={20} color={"#ffffff"} />
          </Pressable>
        </View>
        {/* End Search Container */}

        {/* Article Container */}
        <View style={styles.articleContainer}>
          <Text style={styles.title}>Article</Text>
          <Image
            style={{ height: 240, borderRadius: 20 }}
            source={{
              uri: "https://placehold.co/600x400.png?text=Image&font=Lora",
            }}
          />
          <Pressable style={styles.articleCategory}>
            <Text style={{ fontWeight: 700 }}>Design</Text>
          </Pressable>
          <View style={{ gap: 2 }}>
            <Text style={[styles.title, { fontSize: 18 }]}>Article Title</Text>
            <Text style={styles.subTitle}>4 November 2026</Text>
          </View>
        </View>
        {/* End Article Container */}

        {/* Separator */}
        <View style={styles.separator}></View>
        {/* End Separator */}

        {/* Related Article Container */}
        {/* End Related Article Container */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    gap: 35,
  },

  userContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  searchContainer: {
    flexDirection: "row",
    gap: 5,
  },

  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#999999",
    borderRadius: 8,
    paddingHorizontal: 15,
  },

  searchButton: {
    backgroundColor: "#000000",
    borderRadius: 8,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
  },

  articleContainer: {
    flex: 1,
    gap: 15,
  },

  articleCategory: {
    backgroundColor: "#cccccc",
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },

  title: {
    fontSize: 22,
    fontWeight: 700,
  },

  subTitle: {
    fontSize: 14,
    fontWeight: 600,
  },

  separator: {
    borderTopWidth: 1,
    borderColor: "#cccccc",
  },
});

export default App;
