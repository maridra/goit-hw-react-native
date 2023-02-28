import { TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

import authOperations from "../../redux/auth/authOperations";
import { LogoutIcon } from "../SvgComponents";

export default function GoBackBtn({ style, nav }) {
  const dispatch = useDispatch();

  const onSignOut = () => {
    dispatch(authOperations.authSignOutUser());
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onSignOut}
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
