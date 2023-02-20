import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { CreatePostsScreen, PostsScreen, ProfileScreen } from "../../screens";
import {
  postsNav,
  createPostNav,
  profileNav,
  screenOptions,
  goBackNav,
} from "../helpers";

const MainTab = createBottomTabNavigator();

export default function MainNav() {
  return (
    <MainTab.Navigator screenOptions={screenOptions()}>
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={postsNav()}
      />
      <MainTab.Screen
        name="Create post"
        component={CreatePostsScreen}
        options={goBackNav("Create publication")}
      />
      <MainTab.Screen
        options={profileNav()}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
}
