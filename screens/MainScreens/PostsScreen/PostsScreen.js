import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, View, Image } from "react-native";

import { useFont } from "../../../hooks";
import { PostsList } from "../../../components";
import { selectUser } from "../../../redux/auth/authSelectors";
import postsOperations from "../../../redux/posts/postsOperations";
import { selectAllPosts } from "../../../redux/posts/postsSelectors";
import styles from "./styles";

export default function PostsScreen({ navigation }) {
  const user = useSelector(selectUser);
  const posts = useSelector(selectAllPosts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsOperations.getAllPosts());
  }, []);

  const { isFontLoaded, onLayoutRootView } = useFont();

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
          source={{ uri: user.userAvatar }}
        />
        <View>
          <Text style={styles.username}>{user.username}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
      </View>
      <PostsList
        nav={navigation}
        allPosts={posts}
      />
    </View>
  );
}
