import { View, Text, Pressable, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginTextInput from "../../components/Inputs/LoginTextInput";

export default function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPasswrod] = useState("");
  const [confirmPassword, setConfirmPasswrod] = useState("");

  const handleRegister = async () => {
    if (confirmPassword !== password) {
      Alert.alert(
        "Credentials error",
        "Confirm password does not match your password"
      );
    } else {
      try {
        await fetch(process.env.EXPO_PUBLIC_BASE_URL + "/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phone: phone,
          }),
        });
        navigation.navigate("Otp", {
          phone: phone,
          username: username,
          password: password,
        });
      } catch (error) {
        console.log({ Error: error.message });
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* ---------- HEADER ---------- */}
        <Text style={styles.appText}>Pandalo</Text>

        {/* ---------- USERNAME, PHONE NUMBER AND PASSWORD INPUTS ---------- */}
        <View style={{ width: "70%" }}>
          <Text style={styles.headerText}>
            Please fill out the inforemation:
          </Text>

          <LoginTextInput
            placeholder="Enter your username"
            setProps={setUsername}
          />
          <LoginTextInput
            placeholder="Enter your phone number"
            setProps={setPhone}
          />
          <LoginTextInput
            placeholder="Enter your password"
            secure={true}
            setProps={setPasswrod}
          />
          <LoginTextInput
            placeholder="Enter confirm password"
            secure={true}
            setProps={setConfirmPasswrod}
          />

          <Pressable
            onPress={() => {
              handleRegister();
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Confirm</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  appText: {
    fontFamily: "fontTitle",
    fontSize: 50,
    marginBottom: 50,
  },
  headerText: {
    fontSize: FontSize.medium,
    marginBottom: 15,
    alignSelf: "flex-start",
    fontFamily: "regular",
  },
  button: {
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: FontSize.medium,
    fontFamily: "regular",
  },
});
