import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import * as images from "../src/images";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Profile() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/repo/santiago-arango-g-cover.jpg")}
        style={styles.imgBackground}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["#282929", "#050505"]}
          start={[0.1, 0.1]}
          style={styles.linearGradient}
        >
          <Image resizeMode="cover" style={styles.pic} source={images.santi} />

          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>
              <Feather name="info" size={24} color="#3478f6" /> Name
            </Text>
            <Text style={styles.textInput}>Santiago Arango Gutierrez</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>
              <Feather name="info" size={24} color="#3478f6" /> Age
            </Text>
            <Text style={styles.textInput}>25 years old</Text>
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>
              <Feather name="info" size={24} color="#3478f6" /> Location
            </Text>
            <Text style={styles.textInput}>Medellin, Antioquia COP</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  imgBackground: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    opacity: 0.9,
    justifyContent: "center",
    alignItems: "center",
  },
  pic: {
    width: "50%",
    height: "30%",
    borderRadius: 10,
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 50,
    padding: 2,
    color: "#3478f6",
    borderBottomColor: "#3478f6",
    borderBottomWidth: 1,
    width: "80%",
  },
  textInput: {
    width: "80%",
    fontSize: 21,
    lineHeight: 24,
    paddingLeft: 5,
    color: "#fff",
  },
});
