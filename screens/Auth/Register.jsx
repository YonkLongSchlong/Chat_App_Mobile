import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginTextInput from "../../components/Inputs/LoginTextInput";

export default function Register({ navigation }) {
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
        {/** HEADER */}
        <Text
          style={{ fontFamily: "fontTitle", fontSize: 50, marginBottom: 50 }}
        >
          Pandalo
        </Text>

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
            Please fill out the inforemation:
          </Text>
          <LoginTextInput placeholder="Enter your phone number" />
          <LoginTextInput placeholder="Enter your password" secure={true} />
          <LoginTextInput placeholder="Enter confirm password" secure={true} />
          <Pressable
            onPress={() => navigation.navigate("Otp")}
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
