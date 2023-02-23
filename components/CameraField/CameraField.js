import { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Camera, CameraType } from "expo-camera";

import { CameraEditIcon, CameraUploadIcon } from "../SvgComponents";
import { PrimaryBtn } from "../PrimaryBtn/PrimaryBtn";
import styles from "./styles";

export default function CameraField({ photoUri, setPhotoUri }) {
  const [camera, setCamera] = useState(null);

  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.permissionView}>
        <Text style={styles.permissionText}>
          Please, give permission to use the camera
        </Text>
        <PrimaryBtn
          onPress={requestPermission}
          title="Grant permission"
        />
      </View>
    );
  }

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhotoUri(photo.uri);
  };

  return (
    <Camera
      style={styles.camera}
      ref={setCamera}
    >
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={takePhoto}>
          <CameraUploadIcon />
        </TouchableOpacity>
      </View>
    </Camera>
  );
}
