import { View, Text, Pressable, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginTextInput from "../../components/Inputs/LoginTextInput";

export default function Otp({ route, navigation }) {
  const { username, phone, password, gender, dob } = route.params;
  const [otp, setOtp] = useState("");

  const handleConfirmOtp = async () => {
    try {
      const response = await fetch(
        process.env.EXPO_PUBLIC_BASE_URL + "/auth/verifyRegister",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phone: phone,
            otp: otp,
            username: username,
            password: password,
            gender: gender,
            dob: dob,
          }),
        }
      );
      console.log(response.status);
      if (response.status === 201) {
        Alert.alert("Notices updated", "Create account successfully");
        navigation.navigate("Login");
      } else {
        Alert.alert("Notices updated", "OTP is incorrect, please try again");
      }
    } catch (error) {
      console.log({ Error: error.message });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* ---------- OTP INPUTS ---------- */}
        <View style={{ width: "70%" }}>
          <Text style={styles.headerText}>
            Enter the otp that has been sent to your phone number:
          </Text>

          <LoginTextInput
            placeholder="Enter the otp number"
            setProps={setOtp}
          />

          <Pressable
            onPress={() => {
              handleConfirmOtp();
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
  headerText: {
    fontSize: FontSize.medium,
    marginBottom: 10,
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
