import uuid from "react-native-uuid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { storage } from "../firebase/config";

export const firebaseStore = {
  avatar: "userAvatar/avatar",
  post: "postImage/post",
};

const uploadPhotoToServer = async (image, firebaseStore) => {
  try {
    const res = await fetch(image);

    const file = await res.blob();

    const uniquePostId = uuid.v4();
    const storageRef = ref(storage, `${firebaseStore}_${uniquePostId}`);
    await uploadBytes(storageRef, file);

    const imageUrl = await getDownloadURL(storageRef);
    return imageUrl;
  } catch (error) {
    console.log("uploadPhoto:", error.message);
  }
};

export default uploadPhotoToServer;
