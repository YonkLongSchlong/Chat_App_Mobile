import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginTextInput from "../../components/Inputs/LoginTextInput";

export default function Otp({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 50,
        }}
      >
        {/** PHONE NUMBER INPUTS */}
        <View style={{ width: "70%" }}>
          <Text
            style={{
              fontSize: FontSize.medium,
              marginBottom: 10,
              alignSelf: "flex-start",
              fontFamily: "regular",
            }}
          >
            Enter the otp that has been send to your phone number:
          </Text>
          <LoginTextInput placeholder="Enter the otp number" />
          <Pressable
            onPress={() => navigation.navigate("Login")}
            style={{
              marginTop: 15,
              borderRadius: 5,
              backgroundColor: Colors.dark_blue,
              paddingHorizontal: 10,
              paddingVertical: 15,
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: FontSize.medium,
                fontFamily: "regular",
              }}
            >
              Confirm
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
