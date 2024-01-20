import {
  View,
  Text,
  Animated,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  Pressable,
} from "react-native";
import React, { useRef } from "react";
import {} from "lucide-react-native";

const BANNER_MAX_HEIGHT = Dimensions.get("window").height / 2;

export default function User() {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={{ flex: 1 }}>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      >
        {/** IMAGE BANNER */}
        <View style={styles.bannerContainer}>
          <Animated.Image
            style={styles.banner(scrollY)}
            source={require("../../assets/milad-fakurian-nY14Fs8pxT8-unsplash.jpg")}
          />
        </View>

        {/** AVARTA BANNER */}
        <View style={styles.avartarContainer}>
          <Pressable></Pressable>
        </View>

        {/** TODO: SETTING OPTIONS */}
        <View style={{ height: 1000 }}></View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    alignItems: "center",
    overflow: "hidden",
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
  },
  banner: (scrollY) => ({
    height: BANNER_MAX_HEIGHT,
    width: "300%",
    resizeMode: "cover",
    transform: [
      {
        translateY: scrollY.interpolate({
          inputRange: [
            -BANNER_MAX_HEIGHT,
            0,
            BANNER_MAX_HEIGHT,
            BANNER_MAX_HEIGHT + 1,
          ],
          outputRange: [
            -BANNER_MAX_HEIGHT / 2,
            0,
            BANNER_MAX_HEIGHT * 0.75,
            BANNER_MAX_HEIGHT * 0.75,
          ],
        }),
      },
      {
        scale: scrollY.interpolate({
          inputRange: [
            -BANNER_MAX_HEIGHT,
            0,
            BANNER_MAX_HEIGHT,
            BANNER_MAX_HEIGHT + 1,
          ],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
  avartarContainer: {
    width: 150,
    height: 150,
    backgroundColor: "white",
    borderRadius: 75,
    borderWidth: 5,
    borderColor: "#ECECED",
    alignItems: "center",
    position: "absolute",
    left: Dimensions.get("window").width / 2 - 75,
    top: Dimensions.get("window").height / 2 - 75,
  },
});
