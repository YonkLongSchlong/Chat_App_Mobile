import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GetStarted from "../Auth/GetStarted";
import BottomTab from "./BottomTab";
import Settings from "../Settings/Settings";
import ProfileSettings from "../Settings/Profile/ProfileSettings";
import UsernameSetting from "../Settings/Profile/UsernameSetting";
import PasswordSettings from "../Settings/Profile/PasswordSettings";
import BioSetting from "../Settings/Profile/BioSetting";
import PhoneSetting from "../Settings/Profile/PhoneSetting";

export default function AppStack() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
}