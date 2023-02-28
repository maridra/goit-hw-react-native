import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  Image,
} from "react-native";

import {
  PrimaryBtn,
  AddIcon,
  DeleteBtn,
  KeyboardContainer,
  Avatar,
} from "../../../components";
import authOperations from "../../../redux/auth/authOperations";
import styles from "./styles";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const avatarPlug = require("../../../assets/images/photo-plug.png");

export default function RegistrationScreen({ navigation }) {
  const [avatarImg, setAvatarImg] = useState("");
  const [formState, setFormState] = useState(initialState);
  const [isShowPass, setIsShowPass] = useState(true);
  const [isShowPhoto, setIsShowPhoto] = useState(false);
  const [isActive, setIsActive] = useState("");

  const dispatch = useDispatch();

  const { width } = useWindowDimensions();

  const toggleShowPass = () => setIsShowPass((isShowPass) => !isShowPass);
  const toggleShowPhoto = () => setIsShowPhoto((isShowPhoto) => !isShowPhoto);
  const inputBlur = () => setIsActive("");
  const onSubmit = () => {
    setFormState(initialState);
    dispatch(
      authOperations.authSignUpUser({ ...formState, photoURL: avatarImg })
    );
  };

  return (
    <KeyboardContainer
      keyboardStyle={{ justifyContent: "flex-end" }}
      isBgImg={true}
    >
      <View
        style={{
          ...styles.authContainer,
          height: !isActive ? 549 : 374,
        }}
      >
        <View style={styles.avatarBox}>
          <Avatar
            avatar={avatarImg}
            setAvatar={setAvatarImg}
          />
        </View>
        <Text style={styles.title}>Sign Up</Text>
        <View
          style={{
            ...styles.form,
            width: width - 16 * 2,
            marginBottom: !isActive ? 49 : 32,
          }}
        >
          <TextInput
            style={
              isActive === "login" ? styles.inputActive : styles.inputInactive
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
            <TouchableOpacity
              style={styles.nav}
              activeOpacity={0.6}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.navText}>
                Already have an account? Sign in
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </KeyboardContainer>
  );
}
