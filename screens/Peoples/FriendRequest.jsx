import { FlashList } from "@shopify/flash-list";
import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/Colors";
import FontSize from "../../constants/FontSize";
import { AuthContext } from "../../context/AuthContext";

export default function FriendRequest() {
  const { user, token } = useContext(AuthContext);
  const [friendRequests, setFriendRequests] = useState([]);

  const fetchFriendRequest = async () => {
    try {
      const response = await fetch(
        process.env.EXPO_PUBLIC_BASE_URL + `/user/${user._id}/friendrequest`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      if (response.status === 401) {
        setFriendRequests(null);
        Alert.alert("Notice informed", data);
      } else {
        setFriendRequests(data);
      }
    } catch (error) {
      console.log({
        Error: "Fail fetching friend requests",
        msg: error.message,
      });
    }
  };

  useEffect(() => {
    fetchFriendRequest();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* Render mỗi mục (item) */}
        <View style={{ marginTop: 80 }}>
          <FlatList
            data={friendRequests}
            renderItem={FriendRequestCard}
            keyExtractor={(item) => item._id}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const FriendRequestCard = ({ item }) => {
  // Xử lý sự kiện khi nút Accept được nhấn
  const handleAccept = (itemId) => {
    console.log(`Button 1 pressed for item ${itemId}`);
    // Viết mã xử lý tương ứng với nút 1 ở đây
  };

  // Xử lý sự kiện khi nút Decline được nhấn
  const handleDecline = (itemId) => {
    console.log(`Button 2 pressed for item ${itemId}`);
    // Viết mã xử lý tương ứng với nút 2 ở đây
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.conversationContainer}>
        {/* ---------- AVATAR ---------- */}
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={require("../../assets/96YOG1ej_200x200.jpg")}
          />
        </View>

        {/* ---------- MESSAGE BOX ---------- */}
        <View style={styles.messageContainer}>
          {/* USERNAME */}
          <View>
            <Text style={styles.usernameText}>The Wock</Text>
          </View>

          {/* ---------- LASTEST MESSAGE ---------- */}
          <View>
            <Text style={styles.messageText} numberOfLines={3}>
              Hello! Can we be friend ?
            </Text>
          </View>
        </View>
      </View>

      {/* ---------- BUTTONS ---------- */}
      <View style={styles.btnContainer}>
        <Pressable onPress={() => handleAccept(item.id)}>
          <Text style={styles.btnTextAccept}>Accept</Text>
        </Pressable>
        <Pressable onPress={() => handleDecline(item.id)}>
          <Text style={styles.btnTextDecline}>Decline</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: Colors.white,
  },
  cardContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.light_gray,
    borderRadius: 15,
    marginHorizontal: 25,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    gap: 15,
    backgroundColor: "white",
  },
  conversationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  avatarContainer: {
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  avatar: {
    height: 70,
    width: 70,
    resizeMode: "cover",
  },
  messageContainer: {
    flex: 1,
    justifyContent: "center",
  },
  usernameText: {
    fontFamily: "medium",
    fontSize: FontSize.regular,
    color: Colors.black,
  },
  messageText: {
    fontFamily: "regular",
    fontSize: FontSize.small,
    color: Colors.dark_gray,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 15,
  },
  btnTextAccept: {
    color: Colors.white,
    backgroundColor: Colors.primary,
    borderRadius: 35,
    paddingHorizontal: 20,
    paddingVertical: 8,
    fontFamily: "medium",
    fontSize: FontSize.regular,
  },
  btnTextDecline: {
    color: Colors.white,
    backgroundColor: Colors.dark_gray,
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 8,
    fontFamily: "medium",
    fontSize: FontSize.regular,
  },
});
