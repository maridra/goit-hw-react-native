import { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import { CameraEditPhoto, CameraUploadIcon } from "../SvgComponents";
import styles from "./styles";

export default function CameraField({ img, isImgUpload }) {
  const [isImg, setIsImg] = useState(isImgUpload);

  console.log(isImg);

  return (
    <View>
      <View style={styles.imgWrapper}>
        {isImg && (
          <Image
            style={styles.img}
            source={img}
          />
        )}
        {!isImg ? (
          <CameraUploadIcon style={styles.cameraBtn} />
        ) : (
          <CameraEditPhoto style={styles.cameraBtn} />
        )}
      </View>
      <Text style={styles.text}>
        {!isImg ? "Upload a photo" : "Edit photo"}
      </Text>
    </View>
  );
}
