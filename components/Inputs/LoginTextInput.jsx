import { View, Text, TextInput } from "react-native";
import React from "react";

export default function LoginTextInput(props) {
  return (
    <View
      style={{
        marginBottom: 20,
        alignItems: "center",
      }}
    >
      <TextInput
        placeholder={props.placeholder}
        style={{
          borderRadius: 5,
          borderWidth: 1,
          paddingHorizontal: 10,
          paddingVertical: 10,
          width: "100%",
          color: Colors.dark_gray,
          fontFamily: "regular",
        }}
        secureTextEntry={props.secure}
      ></TextInput>
    </View>
  );
}
