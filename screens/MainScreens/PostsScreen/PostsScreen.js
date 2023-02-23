import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import { useFont } from "../../../hooks";
import { PostsList } from "../../../components";
import styles from "./styles";

const avatarPlug = require("../../../assets/images/photo-plug.png");

export default function PostsScreen({ navigation, route }) {
  const { isFontLoaded, onLayoutRootView } = useFont();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  if (!isFontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View
        onLayout={onLayoutRootView}
        style={styles.userCard}
      >
        <Image
          style={styles.avatar}
          source={avatarPlug}
        />
        <View>
          <Text style={styles.username}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>
      <PostsList
        nav={navigation}
        allPosts={posts}
      />
    </View>
  );
}
