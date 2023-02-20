import React from "react";
import { Text, View, Image, useWindowDimensions } from "react-native";
import { useFont } from "../../../hooks";
import { PostsList } from "../../../components";
import styles from "./styles";

const avatarPlug = require("../../../assets/images/photo-plug.png");

export default function PostsScreen({ navigation }) {
  const { isFontLoaded, onLayoutRootView } = useFont();
  const { width } = useWindowDimensions();

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
      <PostsList nav={navigation} />
    </View>
  );
}
