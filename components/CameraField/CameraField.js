// import { useState, useRef } from "react";
import { useRef } from "react";
import { Camera } from "expo-camera";
import { View, Text, TouchableOpacity } from "react-native";

import { CameraUploadIcon } from "../SvgComponents";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import styles from "./styles";

export default function CameraField({ setPhotoUri }) {
  const cameraRef = useRef();

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
    const photo = await cameraRef.current.takePictureAsync();
    setPhotoUri(photo.uri);
  };

  return (
    <Camera
      style={styles.camera}
      ref={cameraRef}
    >
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={takePhoto}>
          <CameraUploadIcon />
        </TouchableOpacity>
      </View>
    </Camera>
  );
}
