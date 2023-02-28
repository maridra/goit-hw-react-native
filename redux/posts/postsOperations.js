import {
  addDoc,
  collection,
  getDocs,
  query,
  getCountFromServer,
  where,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import { getPosts, getOwnPosts, getCommentsToPost } from "./postsSlice";
import { formatDate } from "../../helpers";

const getAllPosts = () => async (dispatch, getState) => {
  const { userId } = getState().auth;
  try {
    const posts = await getDocs(collection(db, "posts"));

    const newPosts = posts.docs.map(async (doc) => {
      const snapshotComments = await getCountFromServer(
        collection(doc.ref, "comments")
      );
      const commentsCount = snapshotComments.data().count;

      const snapshotLikes = await getCountFromServer(
        collection(doc.ref, "likesCount")
      );
      const likesCount = snapshotLikes.data().count;

      const isLiked = query(
        collection(doc.ref, "likesCount"),
        where("authorId", "==", userId)
      );
      const likes = await getDocs(isLiked);

      return {
        ...doc.data(),
        id: doc.id,
        commentsCount,
        likesCount,
        isLiked: !likes.empty,
      };
    });

    const payload = await Promise.all(newPosts);

    dispatch(getPosts(payload));
  } catch (error) {
    console.log(error);
  }
};

const getUserPosts = () => async (dispatch, getState) => {
  const { userId } = getState().auth;
  try {
    const postsById = query(
      collection(db, "posts"),
      where("userId", "==", userId)
    );
    const posts = await getDocs(postsById);

    const userPosts = posts.docs.map(async (doc) => {
      const snapshotComments = await getCountFromServer(
        collection(doc.ref, "comments")
      );
      const commentsCount = snapshotComments.data().count;

      const snapshotLikes = await getCountFromServer(
        collection(doc.ref, "likes")
      );
      const likesCount = snapshotLikes.data().count;

      const isLiked = query(
        collection(doc.ref, "likes"),
        where("authorId", "==", userId)
      );
      const likes = await getDocs(isLiked);

      return {
        ...doc.data(),
        id: doc.id,
        commentsCount,
        likesCount,
        isLiked: !likes.empty,
      };
    });

    const payload = await Promise.all(userPosts);

    dispatch(getOwnPosts(payload));
  } catch (error) {
    console.log(error.message);
  }
};

const uploadPostToServer = (post) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  try {
    await addDoc(collection(db, "posts"), {
      ...post,
      userId,
    });

    dispatch(getAllPosts());
    dispatch(getUserPosts());
  } catch (error) {
    console.log(error);
  }
};

const addCommentByPostID =
  (postId, commentText) => async (dispatch, getState) => {
    try {
      const { username, userId, userAvatar } = getState().auth;

      const comment = {
        comment: commentText,
        authorId: userId,
        authorName: username,
        authorAvatar: userAvatar,
        postId: postId,
        date: Date.now(),
      };

      console.log("comment::", comment);

      const postRef = doc(db, "posts", postId);

      await addDoc(collection(postRef, "comments"), { ...comment });

      dispatch(getAllCommentsByPostId(postId));
    } catch (error) {
      console.log(error);
    }
  };

const getAllCommentsByPostId = (postId) => async (dispatch) => {
  try {
    const postRef = doc(db, "posts", postId);

    const comments = await getDocs(collection(postRef, "comments"));

    const payload = comments.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      date: formatDate(doc.data().date),
      dateForSort: doc.data().date,
    }));

    dispatch(getCommentsToPost(payload));
  } catch (error) {
    console.log(error.message);
  }
};

const postsOperations = {
  uploadPostToServer,
  getAllPosts,
  getUserPosts,
  addCommentByPostID,
  getAllCommentsByPostId,
};

export default postsOperations;
