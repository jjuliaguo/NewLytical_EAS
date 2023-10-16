import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import AppListItem from "../components/lists/AppListItem";
import { Image } from "react-native-expo-image-cache";

export default function NewsDetailScreen({route}) {
  const post=route.params;
  return (
    <ScrollView style={styles.card}>
      <Image style={styles.image} uri={post.images[0].url} tint="light" preview={{uri:post.images[0].thumbnailUrl}}/>
      <AppListItem title="" subTitle="" />
      <AppText style={styles.title}>
        {post.title}
      </AppText>
      <AppText style={styles.description}>
        {post.article}
      </AppText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    marginBottom: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 7,
    color: "#091BCD",
    marginTop: 20,
    padding: 10,
  },
  description: {
    fontSize: 18,
    fontWeight: "400",
    padding:10,
    marginBottom:200,
  },
});
