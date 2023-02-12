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
    marginTop: 32,
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
});

export default styles;
