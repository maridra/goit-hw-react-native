import { createStackNavigator } from "@react-navigation/stack";

import { RegistrationScreen, LoginScreen } from "../screens";

const AuthStack = createStackNavigator();

export default function AuthNav() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={LoginScreen}
      />
      <AuthStack.Screen
        options={{ headerShown: false }}
        name="Register"
        component={RegistrationScreen}
      />
    </AuthStack.Navigator>
  );
}
