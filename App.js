import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import useRoute from "./routes/useRoute";
import { CommentsScreen } from "./screens";

export default function App() {
  const rouring = useRoute(true);

  return <NavigationContainer>{rouring}</NavigationContainer>;
  // return <CommentsScreen />;
}
