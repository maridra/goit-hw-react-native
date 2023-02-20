import React, { useState } from "react";
import { SafeAreaView, FlatList, View } from "react-native";

import PostItem from "./PostItem";
import styles from "./styles";

import { postsList } from "../../data";

export default function PostsList({ style = {}, nav }) {
  const [posts, setPostsList] = useState(postsList);

  return (
    <SafeAreaView style={{ ...styles.container, ...style }}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <PostItem
            img={item.img}
            title={item.title}
            comments={item.commentsCount}
            likes={item.likesCount}
            location={item.location}
            navigation={nav}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
