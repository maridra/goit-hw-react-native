import { useState, useEffect } from "react";
import {
  ImageBackground,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";

import { PrimaryBtn } from "../../../components";
import { useFont } from "../../../hooks";
import styles from "./styles";

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen() {
  const [isShowPass, setIsShowPass] = useState(true);
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
          source={require("../../../assets/images/bg-photo.png")}
        >
          <KeyboardAvoidingView
            style={{ flex: 1, justifyContent: "flex-end" }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{ ...styles.authContainer, height: !isActive ? 489 : 248 }}
            >
              <Text style={styles.title}>Sign In</Text>
              <View
                style={{
                  ...styles.form,
                  width: dimensions,
                  marginBottom: !isActive ? 43 : 32,
                }}
              >
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
                    title="Sign in"
                    style={styles.primaryBtn}
                    onPress={onSubmit}
                  />
                  <Text style={styles.nav}>Don't have an account? Sign up</Text>
                </>
              )}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}
