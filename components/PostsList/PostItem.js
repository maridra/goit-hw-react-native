import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useFont } from "../../hooks";
import {
  LikeIcon,
  CommentIcon,
  LocationIcon,
  LikeInactive,
  CommentInactive,
} from "../SvgComponents";
import styles from "./styles";

export default function PostItem({
  img,
  title,
  comments,
  likes,
  location,
  locationData,
  navigation,
}) {
  const { isFontLoaded, onLayoutRootView } = useFont();

  if (!isFontLoaded) {
    return null;
  }

  return (
    <View
      onLayout={onLayoutRootView}
      style={styles.postCard}
    >
      <Image
        style={styles.img}
        source={{ uri: img }}
      />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.dataWrapper}>
        <View style={styles.socialData}>
          <View style={{ ...styles.data, marginRight: 24 }}>
            {!comments ? (
              <TouchableOpacity activeOpacity={0.6}>
                <CommentInactive />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.navigate("Comments")}
              >
                <CommentIcon />
              </TouchableOpacity>
            )}
            <Text
              style={{
                ...styles.dataText,
                color: !comments ? "#BDBDBD" : "#212121",
              }}
            >
              {comments}
            </Text>
          </View>
          <View style={styles.data}>
            {!likes ? (
              <TouchableOpacity activeOpacity={0.6}>
                <LikeInactive />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity activeOpacity={0.6}>
                <LikeIcon />
              </TouchableOpacity>
            )}
            <Text
              style={{
                ...styles.dataText,
                color: !likes ? "#BDBDBD" : "#212121",
              }}
            >
              {likes}
            </Text>
          </View>
        </View>
        <View style={styles.data}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate("Location", {location, locationData})}
          >
            <LocationIcon />
          </TouchableOpacity>
          <Text
            style={{
              ...styles.dataText,
              textDecorationLine: "underline",
              marginLeft: 4,
            }}
          >
            {location}
          </Text>
        </View>
      </View>
    </View>
  );
}
