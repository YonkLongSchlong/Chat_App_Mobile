import React from "react";
import { View, Text, FlatList, Button, Image, Pressable, TouchableOpacity } from "react-native";

export default FriendRequest = () => {
  // Data cho FlatList
  const data = [
    { id: "1", text: "Item 1" },
    { id: "2", text: "Item 2" },
    { id: "3", text: "Item 3" },
    { id: "4", text: "Item 4" },
    { id: "5", text: "Item 5" },
    { id: "6", text: "Item 6" },
  ];

  // Render mỗi mục (item)
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 5,
          margin: 5,
          backgroundColor: "white",
        }}
      >
        <View style={styles.conversationContainer}>
          {/* ---------- AVATAR ---------- */}
          <View style={styles.avatarContainer}>
            <Image
              style={{ height: 65, width: 65, resizeMode: "cover" }}
              source={require("../../assets/96YOG1ej_200x200.jpg")}
            />
          </View>

          {/* ---------- MESSAGE BOX ---------- */}
          <View style={styles.messageContainer}>
            {/* USERNAME */}
            <View>
              <Text style={styles.usernameText}>The Wock</Text>
            </View>

            {/* LASTEST MESSAGE */}
            <View>
              <Text style={styles.messageText} numberOfLines={1}>
                Hello! Can we be friend
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.btn}>
            <Pressable onPress={() => handleButton1Press(item.id)}>
              <Text style={styles.btnAccept}>Accept</Text>
            </Pressable>
            <Pressable onPress={() => handleButton1Press(item.id)}>
              <Text style={styles.btnDecline}>Decline</Text>
            </Pressable>
          </View>
      </View>
    );
  };

  // Xử lý sự kiện khi nút Accept được nhấn
  const handleButton1Press = (itemId) => {
    console.log(`Button 1 pressed for item ${itemId}`);
    // Viết mã xử lý tương ứng với nút 1 ở đây
  };

  // Xử lý sự kiện khi nút Decline được nhấn
  const handleButton2Press = (itemId) => {
    console.log(`Button 2 pressed for item ${itemId}`);
    // Viết mã xử lý tương ứng với nút 2 ở đây
  };

  return (
    <View style={{marginTop: 80}}>
      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
    </View>
    
  );
};

const styles = {
  conversationContainer: {
    flex: 1,
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 20,
  },
  avatarContainer: {
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  messageContainer: {
    flex: 1,
    justifyContent: "center",
  },
  usernameText: {
    fontFamily: "semiBold",
    fontSize: 20,
  },
  messageText: {
    fontFamily: "regular",
    fontSize: 16,
  },
  btn: {
    flexDirection: "row",
    paddingHorizontal: 30,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  btnAccept: {
    color: "#ffffff",
    backgroundColor: "#4357A5",
    borderRadius: 5,
    marginRight: 20,
    paddingHorizontal: 20 ,
    paddingVertical: 8,
    fontSize: 16,
  },
  btnDecline: {
    color: "#ffffff",
    backgroundColor: "#000000",
    borderRadius: 5,
    paddingHorizontal: 20 ,
    paddingVertical: 8,
    fontSize: 16,
  }


};


