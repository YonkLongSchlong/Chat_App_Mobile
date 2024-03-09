import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GetStarted, Login, Otp, Register } from "./screens/index";
import { useFonts } from "expo-font";
import BottomTab from "./screens/Navigations/BottomTab";
import Settings from "./screens/Settings/Settings";
import FontSize from "./constants/FontSize";
import ProfileSettings from "./screens/Settings/Profile/ProfileSettings";
import UsernameSetting from "./screens/Settings/Profile/UsernameSetting";
import PasswordSettings from "./screens/Settings/Profile/PasswordSettings";
import BioSetting from "./screens/Settings/Profile/BioSetting";
import PhoneSetting from "./screens/Settings/Profile/PhoneSetting";
import FriendRequest from "./screens/Peoples/FriendRequest";
import Contact from "./screens/Peoples/Contact";
import Birthday from "./screens/Peoples/Birthday";

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
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerShown: true,
            headerTitle: "Settings and privacy",
            headerShadowVisible: false,
            headerTitleStyle: {
              fontFamily: "semiBold",
              fontSize: FontSize.medium,
            },
          }}
        />
        <Stack.Screen
          name="ProfileSettings"
          component={ProfileSettings}
          options={{
            headerShown: true,
            headerTitle: "Profile",
            headerTitleStyle: {
              fontFamily: "semiBold",
              fontSize: FontSize.medium,
            },
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="UsernameSetting"
          component={UsernameSetting}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="PasswordSetting"
          component={PasswordSettings}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="BioSetting"
          component={BioSetting}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="PhoneSetting"
          component={PhoneSetting}
          options={{
            headerShown: true,
            headerTitle: "",
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="FriendRequest"
          component={FriendRequest}
          options={{
            headerShown: true,
            headerTitle: "Friend Request",
            headerTransparent: true,
            headerTitleStyle: {
              fontFamily: "semiBold",
              fontSize: FontSize.medium,
            },
          }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerShown: true,
            headerTitle: "Contact",
            headerTransparent: true,
            headerTitleStyle: {
              fontFamily: "semiBold",
              fontSize: FontSize.medium,
            },
          }}
        />
        <Stack.Screen
          name="Birthday"
          component={Birthday}
          options={{
            headerShown: true,
            headerTitle: "Birthday",
            headerTransparent: true,
            headerTitleStyle: {
              fontFamily: "semiBold",
              fontSize: FontSize.medium,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
