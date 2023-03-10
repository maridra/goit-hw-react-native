import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  list: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  imgContainer: {
    width: "100%",
    height: 240,
  },
  postImg: {
    width: "100%",
    height: 240,
    resizeMode: "cover",
    borderRadius: 6,
  },
  inputWrapper: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  input: {
    height: 50,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    padding: 16,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: "#E8E8E8",

    backgroundColor: "#F6F6F6",
    color: "#212121",
  },
  icon: {
    position: "absolute",
    right: 8,
    bottom: 8,

    width: 34,
    height: 34,
  },
});

export default styles;
