import React from "react";
import { Text, View, Image } from "react-native";
import { useFont } from "../../hooks";
import styles from "./styles";

export default function CommentItem({ img, comment, date, isOwner }) {
  const { isFontLoaded, onLayoutRootView } = useFont();

  if (!isFontLoaded) {
    return null;
  }

  return (
    <View
      onLayout={onLayoutRootView}
      style={
        !isOwner
          ? { ...styles.container, flexDirection: "row" }
          : { ...styles.container, flexDirection: "row-reverse" }
      }
    >
      <Image
        style={
          !isOwner
            ? { ...styles.img, marginRight: 6 }
            : { ...styles.img, marginLeft: 6 }
        }
        source={img}
      />
      <View
        style={
          !isOwner
            ? { ...styles.comment, borderTopRightRadius: 6 }
            : { ...styles.comment, borderTopLeftRadius: 6 }
        }
      >
        <Text style={styles.commetText}>{comment}</Text>
        <Text
          style={
            !isOwner
              ? { ...styles.commentDate, textAlign: "right" }
              : { ...styles.commentDate }
          }
        >
          {date}
        </Text>
      </View>
    </View>
  );
}
