import { useState, useEffect } from "react";
import {
  ImageBackground,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Image,
} from "react-native";

import { PrimaryBtn, AddIcon, DeleteBtn } from "../../../components";
import { useFont } from "../../../hooks";
import styles from "./styles";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const avatarPlug = require("../../../assets/images/photo-plug.png");
const bgImg = require("../../../assets/images/bg-photo.png");

export default function RegistrationScreen() {
  const [isShowPass, setIsShowPass] = useState(true);
  const [isShowPhoto, setIsShowPhoto] = useState(false);
  const [isActive, setIsActive] = useState("");
  const [formState, setFormState] = useState(initialState);
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 16 * 2;

      setDimensions(width);
    };
    const subscription = Dimensions.addEventListener("change", onChange);

    return () => subscription?.remove();
  }, []);

  const { isFontLoaded, onLayoutRootView } = useFont();

  if (!isFontLoaded) {
    return null;
  }

  const toggleShowPass = () => setIsShowPass((isShowPass) => !isShowPass);
  const toggleShowPhoto = () => setIsShowPhoto((isShowPhoto) => !isShowPhoto);
  const inputBlur = () => setIsActive("");
  const keyboadHide = () => Keyboard.dismiss();
  const onSubmit = () => {
    console.log(formState);
    setFormState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboadHide}>
      <View
        style={styles.container}
        onLayout={onLayoutRootView}
      >
        <ImageBackground
          style={styles.image}
          source={bgImg}
        >
          <KeyboardAvoidingView
            style={{ flex: 1, justifyContent: "flex-end" }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{ ...styles.authContainer, height: !isActive ? 549 : 374 }}
            >
              <View style={styles.avatarBox}>
                {!isShowPhoto ? (
                  <View style={styles.avatar} />
                ) : (
                  <Image source={avatarPlug} />
                )}
                <TouchableOpacity onPress={toggleShowPhoto}>
                  {!isShowPhoto ? (
                    <AddIcon style={styles.avatarBtn} />
                  ) : (
                    <DeleteBtn style={styles.avatarBtn} />
                  )}
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Sign Up</Text>
              <View
                style={{
                  ...styles.form,
                  width: dimensions,
                  marginBottom: !isActive ? 49 : 32,
                }}
              >
                <TextInput
                  style={
                    isActive === "login"
                      ? styles.inputActive
                      : {
                          ...styles.inputInactive,
                          color: !formState.login ? "#BDBDBD" : "#212121",
                        }
                  }
                  placeholder="Login"
                  value={formState.login}
                  onChangeText={(value) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      login: value,
                    }))
                  }
                  onFocus={() => setIsActive("login")}
                  onBlur={inputBlur}
                />

                <TextInput
                  style={
                    isActive === "email"
                      ? { ...styles.inputActive, marginTop: 16 }
                      : {
                          ...styles.inputInactive,
                          marginTop: 16,
                          color: !formState.email ? "#BDBDBD" : "#212121",
                        }
                  }
                  placeholder="Email address"
                  value={formState.email}
                  onChangeText={(value) =>
                    setFormState((prevState) => ({
                      ...prevState,
                      email: value,
                    }))
                  }
                  onFocus={() => setIsActive("email")}
                  onBlur={inputBlur}
                />

                <View>
                  <TextInput
                    style={
                      isActive === "password"
                        ? { ...styles.inputActive, marginTop: 16 }
                        : {
                            ...styles.inputInactive,
                            marginTop: 16,
                            color: !formState.password ? "#BDBDBD" : "#212121",
                          }
                    }
                    secureTextEntry={isShowPass}
                    placeholder="Password"
                    value={formState.password}
                    onChangeText={(value) =>
                      setFormState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                    onFocus={() => setIsActive("password")}
                    onBlur={inputBlur}
                  />
                  <Text
                    style={styles.showPassword}
                    onPress={toggleShowPass}
                  >
                    Show password
                  </Text>
                </View>
              </View>
              {!isActive && (
                <>
                  <PrimaryBtn
                    title="Sign up"
                    style={styles.primaryBtn}
                    onPress={onSubmit}
                  />
                  <Text style={styles.nav}>Already have an account? Login</Text>
                </>
              )}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
