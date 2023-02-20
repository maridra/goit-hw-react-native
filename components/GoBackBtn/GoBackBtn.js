import { TouchableOpacity } from "react-native";
import { GoBackIcon } from "../SvgComponents";
import { useNavigation } from "@react-navigation/native";

export default function GoBackBtn({ style = {} }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.goBack();
      }}
      style={{
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 16,
        ...style,
      }}
    >
      <GoBackIcon />
    </TouchableOpacity>
  );
}
