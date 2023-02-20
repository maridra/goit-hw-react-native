import { View } from "react-native";
import { ProfileScreenIcon } from "../../components";
import styles from "../styles";

const profileNav = () => ({
  headerShown: false,
  tabBarIcon: ({ focused, size, color }) => (
    <View
      style={{
        ...styles.iconWrapper,
        backgroundColor: !focused ? "#fff" : "#FF6C00",
      }}
    >
      <ProfileScreenIcon isFocused={!focused ? false : true} />
    </View>
  ),
});

export default profileNav;
