import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImageBackground, View, Text } from "react-native";
import { PostsList, LogOutBtn, Avatar } from "../../../components";
import { useFont } from "../../../hooks";
import postsOperations from "../../../redux/posts/postsOperations";
import { selectUserPosts } from "../../../redux/posts/postsSelectors";
import { selectUser } from "../../../redux/auth/authSelectors";

import styles from "./styles";

const bgImg = require("../../../assets/images/bg-photo.png");

export default function ProfileScreen({ navigation }) {
  const user = useSelector(selectUser);
  const [avatarImg, setAvatarImg] = useState(user.userAvatar);
  const dispatch = useDispatch();

  const posts = useSelector(selectUserPosts)
    .slice()
    .sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

  useEffect(() => {
    dispatch(postsOperations.getUserPosts());
  }, []);

  const { isFontLoaded, onLayoutRootView } = useFont();

  if (!isFontLoaded) {
    return null;
  }

  return (
    <View
      style={styles.container}
      onLayout={onLayoutRootView}
    >
      <ImageBackground
        style={styles.image}
        source={bgImg}
      >
        <View style={styles.profileContainer}>
          <View style={styles.avatarBox}>
            <Avatar
              avatar={avatarImg}
              setAvatar={setAvatarImg}
            />
          </View>

          <LogOutBtn style={styles.logoutBtn} />
          <Text style={styles.title}>{user.username}</Text>
          <PostsList
            style={styles.postList}
            nav={navigation}
            allPosts={posts}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
