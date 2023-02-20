import {
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
  StyleSheet,
} from "react-native";

import { useFont } from "../../hooks";

const bgImg = require("../../assets/images/bg-photo.png");

export default function KeyboardContainer({
  children,
  keyboardStyle = {},
  containerStyle = {},
  isBgImg,
}) {
  const { isFontLoaded, onLayoutRootView } = useFont();

  if (!isFontLoaded) {
    return null;
  }

  const keyboadHide = () => Keyboard.dismiss();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, ...keyboardStyle }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {!isBgImg ? (
        <View style={{ flex: 1, ...containerStyle }}>
          <TouchableWithoutFeedback
            onPress={keyboadHide}
            style={{ flex: 1 }}
            onLayout={onLayoutRootView}
          >
            {children}
          </TouchableWithoutFeedback>
        </View>
      ) : (
        <TouchableWithoutFeedback
          onPress={keyboadHide}
          style={{ flex: 1 }}
          onLayout={onLayoutRootView}
        >
          <ImageBackground
            source={bgImg}
            style={styles.bgImg}
          >
            <TouchableWithoutFeedback onPress={keyboadHide}>
              {children}
            </TouchableWithoutFeedback>
          </ImageBackground>
        </TouchableWithoutFeedback>
      )}
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
});
