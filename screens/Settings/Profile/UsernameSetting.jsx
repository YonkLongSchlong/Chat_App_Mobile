import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import FontSize from "../../../constants/FontSize";
import Colors from "../../../constants/Colors";
import { AuthContext } from "../../../context/AuthContext";
import UserFetchUpdate from "../../../hooks/UpdateUser/UserFetchUpdate";

export default function UsernameSetting({ navigation }) {
  const { user, token, setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");

  const handleUpdateUsername = async () => {
    const data = { username: username };
    const response = await UserFetchUpdate("username", user, token, data);

    if (response.status === 200) {
      user.username = username;
      setUser(user);
      Alert.alert("Notices update", "Update username successfully");
      navigation.navigate("ProfileSettings");
    } else {
      Alert.alert("Notices update", "Something went wrong, please try again");
    }
  };

  return (
    <LinearGradient colors={Colors.gradient} style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Edit Username</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your new username"
            onChangeText={(text) => setUsername(text)}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => {
              handleUpdateUsername();
            }}
          >
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  wrapContainer: {
    backgroundColor: Colors.white,
    marginHorizontal: 20,
    borderRadius: 15,
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerText: {
    fontFamily: "semiBold",
    fontSize: FontSize.large,
  },
  textInputContainer: {
    marginTop: 10,
    marginHorizontal: 20,
  },
  textInput: {
    backgroundColor: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontFamily: "regular",
    fontSize: FontSize.regular,
  },
  buttonContainer: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "regular",
    fontSize: FontSize.regular,
  },
});
