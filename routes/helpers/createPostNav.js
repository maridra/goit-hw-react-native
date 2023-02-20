import { View, Text } from "react-native";
import { CreatePostIcon, GoBackBtn } from "../../components";
import { useFont } from "../../hooks";

import styles from "../styles";

const createPostNav = () => {
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
            Create publication
          </Text>
          <GoBackBtn style={{ ...styles.btn, left: 0 }} />
        </View>
      );
    },
    tabBarStyle: { display: "none" },
    tabBarIcon: ({ focused, size, color }) => (
      <View
        style={{
          ...styles.iconWrapper,
          backgroundColor: !focused ? "#fff" : "#FF6C00",
        }}
      >
        <CreatePostIcon isFocused={!focused ? false : true} />
      </View>
    ),
  };
};

export default createPostNav;
