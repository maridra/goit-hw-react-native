import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  permissionView: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  permissionText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginBottom: 20,
  },
  camera: {
    width: "100%",
    height: 240,
  },
  btnContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "transparent",
  },
});

export default styles;
