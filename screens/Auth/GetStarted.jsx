import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

export default function GetStarted({ navigation }) {
  return (
    <SafeAreaView
      style={{ backgroundColor: Colors.dark_blue, flex: 1, paddingBottom: 50 }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text
          style={{
            fontFamily: "fontTitle",
            color: "white",
            fontSize: 60,
          }}
        >
          Pandalo
        </Text>
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={{
            marginTop: 20,
            backgroundColor: "white",
            paddingHorizontal: 30,
            paddingVertical: 15,
            borderRadius: 20,
          }}
        >
          <Text style={{ fontSize: 16, fontFamily: "regular" }}>
            Start Connecting 💘
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
