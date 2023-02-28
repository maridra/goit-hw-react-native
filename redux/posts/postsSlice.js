import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  userPosts: [],
  comments: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state, { payload }) => ({
      ...state,
      posts: payload,
    }),
    getOwnPosts: (state, { payload }) => ({
      ...state,
      userPosts: payload,
    }),
    getCommentsToPost: (state, { payload }) => ({
      ...state,
      comments: payload,
    }),
  },
});

export const { getPosts, getOwnPosts, getCommentsToPost } = postsSlice.actions;
