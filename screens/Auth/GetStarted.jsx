import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";

export default function GetStarted({ navigation }) {
  return (
    <SafeAreaView
      style={{ backgroundColor: Colors.primary, flex: 1, paddingBottom: 50 }}
    >
      <View style={styles.container}>
        <Text style={styles.appText}>Pandalo</Text>
        <Pressable
          onPress={() => navigation.navigate("Login")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Start Connecting 💘</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  appText: {
    fontFamily: "fontTitle",
    color: "white",
    fontSize: 60,
  },
  button: {
    marginTop: 20,
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "regular",
  },
});
