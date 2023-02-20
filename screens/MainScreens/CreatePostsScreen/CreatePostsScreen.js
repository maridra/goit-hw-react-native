import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";

import {
  CameraEditIcon,
  CameraUploadIcon,
  LocationIcon,
  BasketIcon,
  PrimaryBtn,
  KeyboardContainer,
} from "../../../components";
import styles from "./styles";

const initialState = {
  img: false,
  pictureName: "",
  location: "",
};

const imgPlug = require("../../../assets/images/img1.png");

export default function CreatePostsScreen() {
  const [formState, setFormState] = useState(initialState);
  const [isActive, setIsActive] = useState("");

  const onSubmit = () => {
    console.log(formState);
    setFormState(initialState);
  };

  const onReset = () => {
    setFormState(initialState);
  };

  const toggleIsImg = () =>
    setFormState((prevState) => ({
      ...prevState,
      img: !formState.img,
    }));

  const isDisabledBtn =
    !formState.img || !formState.pictureName || !formState.location
      ? true
      : false;

  const inputBlur = () => setIsActive("");

  return (
    <KeyboardContainer containerStyle={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.form}>
          <View style={{ marginBottom: 32 }}>
            <View style={styles.imgWrapper}>
              {formState.img && (
                <Image
                  style={styles.img}
                  source={imgPlug}
                />
              )}

              <TouchableOpacity
                style={styles.cameraBtn}
                onPress={toggleIsImg}
              >
                {!formState.img ? <CameraUploadIcon /> : <CameraEditIcon />}
              </TouchableOpacity>
            </View>
            <Text style={styles.text}>
              {!formState.img ? "Upload a photo" : "Edit photo"}
            </Text>
          </View>
          <View style={{ marginBottom: 32 }}>
            <TextInput
              style={
                isActive !== "pictureName"
                  ? styles.input
                  : { ...styles.input, ...styles.inputActive }
              }
              placeholder="Picture name"
              value={formState.pictureName}
              onChangeText={(value) =>
                setFormState((prevState) => ({
                  ...prevState,
                  pictureName: value,
                }))
              }
              onFocus={() => setIsActive("pictureName")}
              onBlur={inputBlur}
            />
            <View
              style={
                isActive !== "location"
                  ? { ...styles.input, flexDirection: "row", marginTop: 16 }
                  : {
                      ...styles.input,
                      flexDirection: "row",
                      marginTop: 16,
                      ...styles.inputActive,
                    }
              }
            >
              <LocationIcon style={styles.icon} />
              <TextInput
                style={styles.location}
                placeholder="Location"
                value={formState.location}
                onChangeText={(value) =>
                  setFormState((prevState) => ({
                    ...prevState,
                    location: value,
                  }))
                }
                onFocus={() => setIsActive("location")}
                onBlur={inputBlur}
              />
            </View>
          </View>
        </View>
        {!isActive && (
          <View
            style={{
              flex: 1,
            }}
          >
            <PrimaryBtn
              title="Publish"
              disabled={isDisabledBtn}
              onPress={onSubmit}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.resetBtn}
              onPress={onReset}
            >
              <BasketIcon />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </KeyboardContainer>
  );
}
