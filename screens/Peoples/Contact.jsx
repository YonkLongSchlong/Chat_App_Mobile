import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Contacts from "expo-contacts";
import { AuthContext } from "../../context/AuthContext";

export default Contact = () => {
  const [users, setUsers] = useState([]);
  const { user, token } = useContext(AuthContext);

  /* GET CONTACTS FROM LOCAL PHONE */
  const getContact = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status) {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers],
      });
      if (data.length > 0) {
        const phonenumberList = data.map((user) => {
          return user.phoneNumbers[0].number.replace(/\s/g, "");
        });
        return phonenumberList;
      }
    }
  };

  /* HANDLE REQUEST UPDATE CONTACT */
  const handleUpdateContact = async () => {
    const list = await getContact();
    console.log(list);
    const userList = await fetch(
      process.env.EXPO_PUBLIC_BASE_URL + `/user/${user._id}/findByPhones`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: {
          phones: list,
        },
      }
    );
    // console.log(userList);
    setUsers(userList);
  };

  return (
    <SafeAreaView>
      <View style={{ marginTop: 80 }}>
        <Pressable onPress={() => handleUpdateContact()}>
          <Text>Get contact</Text>
        </Pressable>
        {users.map((user) => {
          return <Text>{user.username}</Text>;
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
