import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { View, TouchableOpacity, Image } from "react-native";

import uploadPhotoToServer, {
  firebaseStore,
} from "../../helpers/uploadPhotoToServer";
import authOperations from "../../redux/auth/authOperations";
import { selectUser } from "../../redux/auth/authSelectors";

import { AddIcon, DeleteBtn } from "../SvgComponents";
import styles from "./styles";

export default function Avatar({ avatar, setAvatar }) {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const addImage = async () => {
    if (avatar) {
      dispatch(authOperations.authUpdateAvatar(""));
      setAvatar("");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const photoUrl = await uploadPhotoToServer(
        result.assets[0].uri,
        firebaseStore.avatar
      );
      setAvatar(photoUrl);
      if (user.currentUser) {
        dispatch(authOperations.authUpdateAvatar(photoUrl));
      }
    }
  };

  return (
    <View style={styles.avatarBox}>
      {avatar && (
        <Image
          style={styles.avatar}
          source={{ uri: avatar }}
        />
      )}
      <TouchableOpacity
        style={styles.avatarBtn}
        onPress={addImage}
      >
        {!avatar ? <AddIcon /> : <DeleteBtn />}
      </TouchableOpacity>
    </View>
    // <View style={styles.avatarBox}>
    //   {!isShowPhoto ? (
    //     <View style={styles.avatar} />
    //   ) : (
    //     <Image source={avatarPlug} />
    //   )}
    //   <TouchableOpacity onPress={toggleShowPhoto}>
    //     {!isShowPhoto ? (
    //       <AddIcon style={styles.avatarBtn} />
    //     ) : (
    //       <DeleteBtn style={styles.avatarBtn} />
    //     )}
    //   </TouchableOpacity>
    // </View>
  );
}
