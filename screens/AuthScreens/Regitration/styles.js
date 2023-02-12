import { StyleSheet } from "react-native";
import commonStyles from "../commonStyles";

const {
  mainContainer,
  bgImage,
  authContainer,
  authTitle,
  form,
  inactiveField,
  activeField,
  showPass,
  authNav,
} = commonStyles;

const styles = StyleSheet.create({
  container: {
    ...mainContainer,
  },
  image: {
    ...bgImage,
  },
  authContainer: {
    ...authContainer,
  },
  title: {
    ...authTitle,
    marginTop: 92,
  },
  form: {
    ...form,
    marginTop: 32,
  },
  inputInactive: {
    ...inactiveField,
  },
  inputActive: {
    ...activeField,
  },
  showPassword: {
    ...showPass,
  },
  nav: {
    ...authNav,
    marginTop: 16,
  },
  avatarBox: {
    position: "absolute",
    top: -60,
    alignSelf: "center",
  },
  avatar: {
    height: 120,
    width: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatarBtn: {
    width: 25,
    height: 25,
    position: "absolute",
    right: -13,
    top: -39,
  },
});

export default styles;
