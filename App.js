import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import {
  ProfileScreen,
  CommentsScreen,
  RegistrationScreen,
  PostsScreen,
  CreatePostsScreen,
  LoginScreen,
} from "./screens";

import useRoute from "./routes/useRoute";

export default function App() {
  const rouring = useRoute(true);

  return <NavigationContainer>{rouring}</NavigationContainer>;
  // return <PostsScreen />;
}
