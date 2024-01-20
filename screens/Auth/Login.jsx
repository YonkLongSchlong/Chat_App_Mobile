import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";
import FontSize from "../../constants/FontSize";
import LoginTextInput from "../../components/Inputs/LoginTextInput";

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 50,
        }}
      >
        {/** HEADER */}
        <Text
          style={{ fontFamily: "fontTitle", fontSize: 50, marginBottom: 50 }}
        >
          Pandalo
        </Text>

        {/** INPUT USER'S PHONE AND PASSWORD */}
        <View
          style={{
            width: "70%",
          }}
        >
          <Text
            style={{
              fontSize: FontSize.medium,
              marginBottom: 20,
              alignSelf: "flex-start",
              fontFamily: "regular",
            }}
          >
            Login to your account:
          </Text>
          <LoginTextInput placeholder="Enter your phone number" />
          <LoginTextInput placeholder="Enter your password" secure={true} />
          <Pressable style={{ marginTop: -10 }}>
            <Text
              style={{
                fontFamily: "regular",
                fontSize: FontSize.regular,
                color: Colors.dark_blue,
                alignSelf: "flex-end",
                textDecorationLine: "underline",
              }}
            >
              Forgot password
            </Text>
          </Pressable>
          <Pressable
            style={{
              marginTop: 30,
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
              Sign in
            </Text>
          </Pressable>
        </View>

        {/** REGISTER LINK */}
        <View
          style={{
            width: "70%",
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Text
            style={{
              alignSelf: "flex-end",
              fontFamily: "regular",
              fontSize: FontSize.regular,
            }}
          >
            Don't have an account?
          </Text>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text
              style={{
                fontSize: FontSize.regular,
                color: Colors.dark_blue,
                fontFamily: "regular",
                textDecorationLine: "underline",
              }}
            >
              Sign up
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
