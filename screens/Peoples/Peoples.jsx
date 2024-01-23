import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";
import PeopleHeaderBar from "../../components/HeaderBar/PeopleHeaderBar";
import FontSize from "../../constants/FontSize";

export default function Peoples() {
  const [selected, setSelected] = useState("Friends");
  return (
    <View>
      <SafeAreaView style={{ backgroundColor: Colors.primary }}>
        <PeopleHeaderBar />
      </SafeAreaView>

      {/* ---------- HEADER ---------- */}
      <View style={styles.headerContainer}>
        <ScrollView horizontal style={styles.scrollContainer}>
          <CategoryButton
            text={"Friends"}
            selected={selected}
            setSelected={setSelected}
          />
          <CategoryButton
            text={"Groups"}
            selected={selected}
            setSelected={setSelected}
          />
        </ScrollView>
      </View>
    </View>
  );
}

function CategoryButton(props) {
  return (
    <Pressable
      onPress={() => props.setSelected(props.text)}
      style={{
        marginHorizontal: 10,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor:
          props.selected == props.text ? Colors.primary : "white",
      }}
    >
      <Text
        style={[
          styles.headerText,
          { color: props.selected == props.text ? "white" : Colors.black },
        ]}
      >
        {props.text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 15,
    marginHorizontal: 10,
  },
  headerContainer: {
    alignItems: "center",
  },
  headerText: {
    fontFamily: "semiBold",
    fontSize: FontSize.medium,
  },
});
