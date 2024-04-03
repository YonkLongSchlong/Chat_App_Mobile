import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginTextInput from "../../components/Inputs/LoginTextInput";
import Checkbox from "expo-checkbox";
import Colors from "../../constants/Colors";
import DateTimePicker from "@react-native-community/datetimepicker";
import { LogBox } from "react-native";
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function Register({ navigation }) {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPasswrod] = useState("");
  const [confirmPassword, setConfirmPasswrod] = useState("");
  const [isMale, setIsMale] = useState(true);
  const [isFemale, setIsFemale] = useState(false);
  const [gender, setGender] = useState("Male");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const handleRegister = async () => {
    if (confirmPassword !== password) {
      Alert.alert(
        "Credentials error",
        "Confirm password does not match your password"
      );
    } else {
      try {
        isFemale ? setGender("Female") : setGender("Male");
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
          gender: gender,
          dob: date,
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

        <View style={{ width: "70%" }}>
          {/* ---------- USERNAME, PHONE NUMBER AND PASSWORD INPUTS ---------- */}
          <Text style={styles.headerText}>
            Please fill out the information:
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

          {/* ---------- DOB PICKER ---------- */}
          <View style={styles.dobContainer}>
            <Pressable
              onPressIn={() => {
                setShow(true);
              }}
            >
              <TextInput
                style={styles.textInput}
                onChangeText={(text) => setUsername(text)}
                defaultValue={date.toLocaleDateString("it-IT")}
                editable={false}
              />
            </Pressable>
            {show && (
              <DateTimePicker
                value={date}
                mode="date"
                onChange={(e, selected) => {
                  setShow(!show);
                  setDate(selected);
                }}
              />
            )}
          </View>

          {/* ---------- GENDER CHECKBOX ---------- */}
          <View style={styles.checkboxContainer}>
            <View style={styles.section}>
              <Checkbox
                style={styles.checkbox}
                value={isMale}
                onValueChange={() => {
                  setIsFemale(false);
                  setIsMale(true);
                }}
                color={isMale ? Colors.primary : undefined}
              />
              <Text style={styles.paragraph}>Male</Text>
            </View>
            <View style={styles.section}>
              <Checkbox
                style={styles.checkbox}
                value={isFemale}
                onValueChange={() => {
                  setIsFemale(true);
                  setIsMale(false);
                }}
                color={isFemale ? Colors.primary : undefined}
              />
              <Text style={styles.paragraph}>Female</Text>
            </View>
          </View>

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
  checkboxContainer: {
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 60,
  },
  checkbox: {
    backgroundColor: Colors.light_gray,
    color: "red",
    borderRadius: 10,
    padding: 10,
    fontSize: FontSize.small,
    borderColor: Colors.light_gray,
  },
  section: {
    flexDirection: "row",
    gap: 10,
  },
  paragraph: {
    color: Colors.black,
    fontFamily: "regular",
    fontSize: FontSize.regular,
  },
  dobContainer: {},
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    fontFamily: "regular",
    fontSize: FontSize.regular,
    borderWidth: 1,
    color: Colors.dark_gray,
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
    color: Colors.white,
    fontSize: FontSize.medium,
    fontFamily: "regular",
  },
});
