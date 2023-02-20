import { View, Text } from "react-native";
import { PostsScreenIcon, LogOutBtn } from "../../components";
import { useFont } from "../../hooks";
import styles from "../styles";

const postsNav = () => {
  const { isFontLoaded, onLayoutRootView } = useFont();

  if (!isFontLoaded) {
    return null;
  }
  return {
    header: ({ options }) => {
      const { headerStyle, headerTitleStyle, headerTintColor } = options;
      return (
        <View
          style={{
            ...headerStyle,
            ...headerTintColor,
            ...styles.container,
          }}
          onLayout={onLayoutRootView}
        >
          <Text
            style={{
              ...headerTitleStyle,
              ...styles.text,
            }}
          >
            Publications
          </Text>
          <LogOutBtn style={{ ...styles.btn, right: 0 }} />
        </View>
      );
    },
    tabBarIcon: ({ focused, size, color }) => (
      <View
        style={{
          ...styles.iconWrapper,
          backgroundColor: !focused ? "#fff" : "#FF6C00",
        }}
      >
        <PostsScreenIcon isFocused={!focused ? false : true} />
      </View>
    ),
  };
};

export default postsNav;
