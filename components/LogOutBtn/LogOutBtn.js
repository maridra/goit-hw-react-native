import { TouchableOpacity } from "react-native";
import { LogoutIcon } from "../SvgComponents";

export default function GoBackBtn({ style, nav }) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        console.log("Log out");
      }}
      style={{
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 16,
        ...style,
      }}
    >
      <LogoutIcon />
    </TouchableOpacity>
  );
}
