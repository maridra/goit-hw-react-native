import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function PrimaryBtn({ title, onPress, disabled }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={
        !disabled ? styles.btn : { ...styles.btn, backgroundColor: "#F6F6F6" }
      }
      onPress={onPress}
    >
      <Text
        style={!disabled ? styles.text : { ...styles.text, color: "#BDBDBD" }}
      >
        {title}
      </Text>
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
