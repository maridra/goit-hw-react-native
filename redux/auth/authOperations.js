import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/config";
import {
  updateUserProfile,
  authStateChange,
  authSignOut,
  updateUserAvatar,
} from "./authSlice";

const authSignUpUser =
  ({ login, email, password, photoURL }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName: login,
        photoURL,
      });

      const userSuccess = auth.currentUser;

      dispatch(
        updateUserProfile({
          userId: userSuccess.uid,
          email: userSuccess.email,
          username: userSuccess.displayName,
          avatar: userSuccess.photoURL,
        })
      );

      dispatch(authStateChange({ stateChange: true }));
    } catch (error) {
      console.log(error);
    }
  };

const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      dispatch(
        updateUserProfile({
          userId: user.uid,
          email: user.email,
          username: user.displayName,
          avatar: user?.photoURL,
        })
      );

      dispatch(authStateChange({ stateChange: true }));
    } catch (error) {
      console.log(error);
    }
  };

const authSignOutUser = () => async (dispatch, getState) => {
  await signOut(auth);
  dispatch(authSignOut());
};

const authStateChangeUser = () => async (dispatch, getState) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        updateUserProfile({
          userId: user?.uid,
          username: user?.displayName,
          email: user?.email,
          avatar: user?.photoURL,
        })
      );
      dispatch(authStateChange({ stateChange: true }));
    }
  });
};

const authUpdateAvatar = (photoURL) => async (dispatch) => {
  try {
    await updateProfile(auth.currentUser, {
      photoURL,
    });
    const userSuccess = auth.currentUser;
    dispatch(
      updateUserAvatar({
        avatar: userSuccess.photoURL,
      })
    );
  } catch (error) {
    console.log(error);
  }
};

const authOperations = {
  authSignInUser,
  authSignUpUser,
  authSignOutUser,
  authStateChangeUser,
  authUpdateAvatar,
};

export default authOperations;
