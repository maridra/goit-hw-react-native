import { useState } from "react";
import {
  ImageBackground,
  View,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { AddIcon, DeleteBtn, PostsList, LogOutBtn } from "../../../components";
import { useFont } from "../../../hooks";
import styles from "./styles";

const bgImg = require("../../../assets/images/bg-photo.png");
const avatarPlug = require("../../../assets/images/photo-plug.png");

export default function ProfileScreen({ navigation }) {
  const [isShowPhoto, setIsShowPhoto] = useState(true);
  const { isFontLoaded, onLayoutRootView } = useFont();

  if (!isFontLoaded) {
    return null;
  }

  const toggleShowPhoto = () => setIsShowPhoto((isShowPhoto) => !isShowPhoto);

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
            {!isShowPhoto ? (
              <View style={styles.avatar} />
            ) : (
              <Image source={avatarPlug} />
            )}
            <TouchableOpacity onPress={toggleShowPhoto}>
              {!isShowPhoto ? (
                <AddIcon style={styles.avatarBtn} />
              ) : (
                <DeleteBtn style={styles.avatarBtn} />
              )}
            </TouchableOpacity>
          </View>
          <LogOutBtn style={styles.logoutBtn} />
          <Text style={styles.title}>Natali Romanova</Text>
          <PostsList
            style={styles.postList}
            nav={navigation}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
