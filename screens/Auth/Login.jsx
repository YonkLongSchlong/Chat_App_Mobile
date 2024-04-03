import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";
import FontSize from "../../constants/FontSize";
import LoginTextInput from "../../components/Inputs/LoginTextInput";
import { AuthContext } from "../../context/AuthContext";

export default function Login({ navigation }) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* ---------- HEADER ---------- */}
        <Text style={styles.appText}>Pandalo</Text>

        {/* ---------- INPUT USER'S PHONE AND PASSWORD ---------- */}
        <View style={{ width: "70%" }}>
          <Text style={styles.headerText}>Login to your account:</Text>
          <LoginTextInput
            placeholder="Enter your phone number"
            setProps={setPhone}
          />
          <LoginTextInput
            placeholder="Enter your password"
            setProps={setPassword}
            secure={true}
          />

          <Pressable style={{ marginTop: -10 }}>
            <Text style={styles.forgetPasswordText}>Forgot password</Text>
          </Pressable>

          <Pressable
            style={styles.signinButton}
            onPress={() => {
              login(phone, password);
            }}
          >
            <Text style={styles.signinButtonText}>Sign in</Text>
          </Pressable>
        </View>

        {/* ---------- REGISTER LINK ---------- */}
        <View style={styles.registerContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={styles.signupLinkText}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  appText: {
    fontFamily: "fontTitle",
    fontSize: 50,
    marginBottom: 50,
  },
  headerText: {
    fontSize: FontSize.medium,
    marginBottom: 20,
    alignSelf: "flex-start",
    fontFamily: "regular",
  },
  forgetPasswordText: {
    fontFamily: "regular",
    fontSize: FontSize.regular,
    color: Colors.primary,
    alignSelf: "flex-end",
    textDecorationLine: "underline",
  },
  signinButton: {
    marginTop: 30,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: "100%",
    alignItems: "center",
  },
  signinButtonText: {
    color: "white",
    fontSize: FontSize.medium,
    fontFamily: "regular",
  },
  registerContainer: {
    width: "70%",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  signupText: {
    alignSelf: "flex-end",
    fontFamily: "regular",
    fontSize: FontSize.regular,
  },
  signupLinkText: {
    fontSize: FontSize.regular,
    color: Colors.primary,
    fontFamily: "regular",
    textDecorationLine: "underline",
  },
});
