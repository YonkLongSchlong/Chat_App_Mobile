import { View, TextInput, StyleSheet } from "react-native";
import React from "react";

export default function LoginTextInput(props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={props.placeholder}
        style={styles.textInput}
        secureTextEntry={props.secure}
        onChangeText={(text) => {
          props.setProps(text);
        }}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    alignItems: "center",
  },
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "100%",
    color: Colors.dark_gray,
    fontFamily: "regular",
  },
});
