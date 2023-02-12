import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function PrimaryBtn({ title, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.btn}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 100,
    marginHorizontal: 16,
    height: 50,
    padding: 16,
    backgroundColor: "#FF6C00",
  },
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#FFFFFF",
    alignSelf: "center",
  },
});
