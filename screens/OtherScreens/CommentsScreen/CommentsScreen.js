import React, { useState } from "react";
import {
  FlatList,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import {
  CommentItem,
  KeyboardContainer,
  SendCommentIcon,
} from "../../../components";

import { postsList } from "../../../data";
import styles from "./styles";

const initialState = {
  comment: "",
};

export default function CommentsScreen() {
  const [posts, setPostsList] = useState(postsList);
  const [commentInput, setCommentInput] = useState(initialState);
  const [isActive, setIsActive] = useState(false);

  const inputBlur = () => setIsActive("");

  const onSubmit = () => {
    console.log(commentInput);
    setCommentInput(initialState);
    Keyboard.dismiss();
  };

  return (
    <KeyboardContainer
      containerStyle={styles.container}
      keyboardStyle={{ justifyContent: "flex-end" }}
    >
      <>
        <FlatList
          data={posts[1].comments}
          style={styles.list}
          ListHeaderComponent={
            <View>
              <Image
                style={styles.postImg}
                source={posts[1].img}
              />
            </View>
          }
          renderItem={({ item }) => (
            <CommentItem
              img={item.ownerAvatar}
              comment={item.text}
              date={item.date}
              isOwner={item.isOwner}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.inputWrapper}>
          <TextInput
            style={
              !isActive
                ? styles.input
                : {
                    ...styles.input,
                    backgroundColor: "#FFFFFF",
                    borderColor: "#FF6C00",
                  }
            }
            placeholder="Comment..."
            value={commentInput}
            onChangeText={(value) => setCommentInput(value)}
            onFocus={() => setIsActive(true)}
            onBlur={inputBlur}
          />
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={onSubmit}
          >
            <SendCommentIcon style={styles.icon} />
          </TouchableOpacity>
        </View>
      </>
    </KeyboardContainer>
  );
}
