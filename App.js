import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { RegistrationScreen, LoginScreen } from "./screens";

export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen />
      {/* <LoginScreen /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
