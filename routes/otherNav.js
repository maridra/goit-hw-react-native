import { createStackNavigator } from "@react-navigation/stack";
import MainNav from "./mainNav/mainNav";

import { goBackNav, screenOptions } from "./helpers";
import { CommentsScreen, MapScreen } from "../screens";

const OtherStack = createStackNavigator();

export default function OtherNav() {
  return (
    <OtherStack.Navigator
      screenOptions={screenOptions()}
      initialRouteName="Home"
    >
      <OtherStack.Screen
        options={{ headerShown: false }}
        name="Home"
      >
        {() => <MainNav />}
      </OtherStack.Screen>
      <OtherStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={goBackNav("Comments")}
      />
      <OtherStack.Screen
        name="Location"
        component={MapScreen}
        options={goBackNav("Location")}
      />
    </OtherStack.Navigator>
  );
}
