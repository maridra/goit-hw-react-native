import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  profileContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 147,
    // height: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
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
  logoutBtn: {
    position: "absolute",
    right: 16,
    top: 22,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    alignSelf: "center",
    letterSpacing: 0.01,
    color: "#212121",
    marginTop: 92,
  },
  postList: {
    marginTop: 32,
  },
});

export default styles;
