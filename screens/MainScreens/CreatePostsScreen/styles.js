import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingBottom: 42,
  },
  form: {
    marginHorizontal: 16,
  },
  imgWrapper: {
    width: "100%",
    height: 240,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  cameraBtn: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "transparent",
  },
  text: {
    marginTop: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  input: {
    height: 50,
    alignItems: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  inputActive: {
    borderBottomColor: "#FF6C00",
  },
  location: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  icon: {
    marginRight: 4,
  },
  resetBtn: {
    marginHorizontal: 16,
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
  },
});

export default styles;
