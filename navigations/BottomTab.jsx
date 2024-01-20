import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { User } from "../screens";
import { UserRound } from "lucide-react-native";
import Colors from "../constants/Colors";

export default function BottomTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { color: Colors.dark_blue },
        tabBarLabel: ({ focused }) => {},
      }}
    >
      <Tab.Screen
        name="User"
        component={User}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <UserRound size={24} color={focused ? Colors.dark_blue : "black"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
