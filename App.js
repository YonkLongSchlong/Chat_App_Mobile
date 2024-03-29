import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { GetStarted, Login, Otp, Register } from "./screens/index";
import { useFonts } from "expo-font";
import BottomTab from "./screens/Navigations/BottomTab";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [fontLoaded] = useFonts({
    fontTitle: require("./assets/fonts/Pacifico-Regular.ttf"),
    regular: require("./assets/fonts/Lexend-Regular.ttf"),
    medium: require("./assets/fonts/Lexend-Medium.ttf"),
    semiBold: require("./assets/fonts/Lexend-SemiBold.ttf"),
    bold: require("./assets/fonts/Lexend-Bold.ttf"),
    extraBold: require("./assets/fonts/Lexend-ExtraBold.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTab">
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
