import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import useRoute from "./routes/useRoute";

export default function App() {
  const rouring = useRoute(false);

  return <NavigationContainer>{rouring}</NavigationContainer>;
}
