import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginTextInput from "../../components/Inputs/LoginTextInput";

export default function Otp({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* ---------- OTP INPUTS ---------- */}
        <View style={{ width: "70%" }}>
          <Text style={styles.headerText}>
            Enter the otp that has been send to your phone number:
          </Text>

          <LoginTextInput placeholder="Enter the otp number" />

          <Pressable
            onPress={() => navigation.navigate("Login")}
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
