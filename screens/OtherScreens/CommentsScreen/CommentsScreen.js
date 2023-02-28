import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

import postsOperations from "../../../redux/posts/postsOperations";
import { selectComments } from "../../../redux/posts/postsSelectors";
import { selectUser } from "../../../redux/auth/authSelectors";
import styles from "./styles";

const initialState = {
  comment: "",
};

export default function CommentsScreen({ route }) {
  const { postId, postUri } = route.params;
  const [commentInput, setCommentInput] = useState(initialState);
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  const { userId } = useSelector(selectUser);
  const comments = useSelector(selectComments);

  const sortedComments = [...comments].sort(
    (a, b) => b.dateForSort - a.dateForSort
  );

  useEffect(() => {
    dispatch(postsOperations.getAllCommentsByPostId(postId));

    return () => {
      dispatch(postsOperations.getAllPosts());
      dispatch(postsOperations.getUserPosts());
    };
  }, [dispatch, postId]);

  const inputBlur = () => {
    setIsActive(false);
  };

  const onSubmit = () => {
    dispatch(postsOperations.addCommentByPostID(postId, commentInput));
    setCommentInput(initialState);
    Keyboard.dismiss();
  };

  return (
    <KeyboardContainer
      containerStyle={{ ...styles.container }}
      keyboardStyle={{ justifyContent: "flex-end", maxHeight: "100%" }}
    >
      <>
        <FlatList
          data={sortedComments}
          style={styles.list}
          ListHeaderComponent={
            <View style={styles.imgContainer}>
              <Image
                style={styles.postImg}
                source={{ uri: postUri }}
              />
            </View>
          }
          renderItem={({ item }) => {
            const isOwner = item.authorId === userId;
            return (
              <CommentItem
                img={item.authorAvatar}
                comment={item.comment}
                date={item.date}
                isOwner={isOwner}
              />
            );
          }}
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
