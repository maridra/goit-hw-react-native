import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  username: null,
  email: null,
  userAvatar: null,
  stateChange: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      username: payload.username,
      email: payload.email,
      userAvatar: payload.avatar,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authSignOut: () => initialState,
    updateUserAvatar: (state, { payload }) => ({
      ...state,
      userAvatar: payload.avatar,
    }),
  },
});

export const { updateUserProfile, authStateChange, authSignOut } =
  authSlice.actions;
