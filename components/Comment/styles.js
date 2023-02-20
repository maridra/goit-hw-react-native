import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    flexDirection: "row",
  },
  img: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  comment: {
    width: 299,
    padding: 16,
    borderBottomRightRadius: 6,
    borderBottomLeftRadius: 6,
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
  commetText: {
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    lineHeight: 18,
    color: "#212121",
  },
  commentDate: {
    marginTop: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    lineHeight: 12,
    color: "#BDBDBD",
  },
});

export default styles;
