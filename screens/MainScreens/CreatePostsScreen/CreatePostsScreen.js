import { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import * as Location from "expo-location";
import uuid from "react-native-uuid";

import {
  CameraEditIcon,
  LocationIcon,
  BasketIcon,
  PrimaryBtn,
  KeyboardContainer,
  CameraField,
} from "../../../components";
import styles from "./styles";

const initialState = {
  img: "",
  title: "",
  location: "",
};

export default function CreatePostsScreen({ navigation }) {
  const [photoUri, setPhotoUri] = useState("");
  const [formState, setFormState] = useState(initialState);
  const [locationData, setLocationData] = useState(null);
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setLocationData(coords);
    })();
  }, []);

  const onSubmit = () => {
    setFormState(initialState);
    setPhotoUri("");

    const initialPost = {
      id: uuid.v4(),
      commentsCount: 0,
      likesCount: 0,
      comments: [],
    };

    const newPost = { ...initialPost, ...formState, locationData };
    // console.log(newPost);
    navigation.navigate("Posts", newPost);
  };

  const onReset = () => {
    setFormState(initialState);
    setPhotoUri("");
  };

  const onTakePhotoClick = (photo) => {
    setPhotoUri(photo);
    setFormState((prevState) => ({
      ...prevState,
      img: photo,
    }));
  };

  const onTakePhotoReset = () => {
    setPhotoUri("");
    setFormState((prevState) => ({
      ...prevState,
      img: "",
    }));
  };

  const isDisabledBtn =
    !formState.img || !formState.title || !formState.location ? true : false;

  const inputBlur = () => setIsActive("");

  return (
    <KeyboardContainer containerStyle={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={styles.form}>
          <View style={{ marginBottom: 32 }}>
            <View style={styles.imgWrapper}>
              {!photoUri ? (
                <CameraField
                  photoUri={photoUri}
                  setPhotoUri={onTakePhotoClick}
                />
              ) : (
                <>
                  <Image
                    source={{ uri: photoUri }}
                    style={styles.img}
                  />
                  <TouchableOpacity
                    onPress={onTakePhotoReset}
                    style={styles.cameraBtn}
                  >
                    <CameraEditIcon />
                  </TouchableOpacity>
                </>
              )}
            </View>
            <Text style={styles.text}>
              {!photoUri ? "Upload a photo" : "Edit photo"}
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
              value={formState.title}
              onChangeText={(value) =>
                setFormState((prevState) => ({
                  ...prevState,
                  title: value,
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
