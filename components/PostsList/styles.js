import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  postCard: {
    minHeight: 299,
    marginBottom: 32,
    marginHorizontal: 16,
  },
  img: {
    width: "100%",
    resizeMode: "cover",
    borderRadius: 8,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    marginTop: 8,
    color: "#212121",
  },
  dataWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  socialData: {
    flexDirection: "row",
  },
  data: {
    flexDirection: "row",
    alignItems: "center",
  },
  dataText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    marginLeft: 6,
    color: "#212121",
  },
});

export default styles;
